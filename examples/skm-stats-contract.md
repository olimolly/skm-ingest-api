# Cahier des charges technique — SKM Stats → SKM Ingest API

Ce document est le contrat d'intégration à respecter par **SKM Stats**. Le
fichier [`reforger-events.json`](reforger-events.json) est le payload de
référence complet et [`routes.md`](routes.md) documente les routes de l'API.

## 1. Périmètre et responsabilités

SKM Stats doit :

- écouter les événements produits par le serveur Arma Reforger ;
- transformer chaque changement utile en un événement conforme à ce contrat ;
- conserver leur ordre, les mettre en file et les envoyer de façon fiable ;
- fournir la vérité métier : identité, état, progression et hiérarchie des
  objectifs, y compris les valeurs propres à l'objectif parent.

SKM Ingest API :

- authentifie et valide les requêtes ;
- crée la session et les objectifs associés ;
- stocke les événements sans doublon grâce à `eventId` ;
- n'invente pas les événements absents et ne recalcule pas la progression d'un
  parent à partir de ses enfants.

## 2. Transport

| Élément | Valeur |
| --- | --- |
| Méthode et route | `POST /reforger/events` |
| Corps | JSON UTF-8 |
| En-têtes | `Content-Type: application/json` et `X-Api-Key: <clé>` |
| Taille d'un lot | de 1 à 100 événements côté producteur |
| Limite API | 60 requêtes par minute et par IP reconnue |
| Réponse de succès | HTTP `200` |

L'URL et la clé d'API doivent venir de la configuration de déploiement. Avec
Enfusion, configurer les headers du `RestContext` avant l'envoi :

```c
ctx.SetHeaders("Content-Type,application/json,X-Api-Key," + apiKey);
```

Le fonctionnement de `SetHeaders()` doit être validé sur serveur dédié. Le
producteur ne doit pas envoyer de lot vide ni mélanger plusieurs sessions dans
une même requête.

## 3. Identité d'une session

Une session est identifiée uniquement par le couple :

- `serverId` : identifiant stable et configuré du serveur ;
- `sessionId` : identifiant de cette exécution de mission sur ce serveur.

Règles :

- conserver exactement le même couple pendant toute la session ;
- générer un nouveau `sessionId` pour chaque nouvelle exécution sur un même
  serveur, même si la mission est identique ;
- un même `sessionId` peut exister sur deux serveurs distincts ;
- conserver également le même `missionId` et le même `missionName` ;
- envoyer `SESSION_STARTED` dans le premier lot, avant les objectifs ;
- envoyer `SESSION_ENDED` dans le dernier lot, après les derniers changements ;
- ne plus émettre d'événement pour cette session après `SESSION_ENDED`.

## 4. Corps de la requête

```json
{
  "serverId": "server-eu-01",
  "sessionId": "session-example-20261108-001",
  "missionId": "mission-coop-001",
  "missionName": "Opération Exemple",
  "events": []
}
```

| Champ | Type | Requis | Règle |
| --- | --- | --- | --- |
| `serverId` | chaîne | oui | Doit être autorisé par la liste blanche de l'API. |
| `sessionId` | chaîne | oui | Stable et unique sur ce serveur pour cette exécution. |
| `missionId` | chaîne | oui | Identifiant stable de la mission. |
| `missionName` | chaîne | non | Libellé humain de la mission. |
| `events` | tableau | oui | 1 à 100 événements de cette seule session. |

## 5. Schéma commun d'un événement

| Champ | Type | Requis | Règle |
| --- | --- | --- | --- |
| `eventId` | chaîne | oui | Identifiant globalement unique et immuable. Réutiliser le même lors d'un retry. |
| `type` | chaîne | oui | Un des quatre types documentés ci-dessous. |
| `timestamp` | nombre | oui | Date Unix en secondes. Les décimales sont admises et recommandées si plusieurs changements surviennent dans la même seconde. |
| `taskId` | chaîne | objectif | Identifiant stable de l'objectif dans cette session. |
| `parentTaskId` | chaîne | sous-objectif | `taskId` du parent direct. À omettre pour une racine. |
| `taskTitle` | chaîne | non | Titre, 250 caractères maximum. |
| `taskDescription` | chaîne | non | Description, 4 000 caractères maximum. |
| `oldState` | nombre | non | Ancienne valeur numérique Reforger, transmise sans conversion. |
| `oldStateName` | chaîne | non | Ancien nom d'état canonique. |
| `newState` | nombre | non | Nouvelle valeur numérique Reforger, transmise sans conversion. |
| `newStateName` | chaîne | non | Nouveau nom d'état canonique. |
| `oldProgress` | nombre | non | Progression précédente, de 0 à 100 inclus. |
| `newProgress` | nombre | non | Nouvelle progression, de 0 à 100 inclus. |

`taskId` est obligatoire dès que l'événement concerne un objectif, une
progression ou une hiérarchie. Les valeurs inconnues doivent être **omises** et
non envoyées à `null`. `eventId` étant unique dans toute la base, sa génération
doit incorporer assez de contexte (`serverId`, `sessionId`, compteur ou UUID)
pour éviter une collision entre serveurs.

Les titres et descriptions ne doivent contenir ni secret, ni clé d'API, ni
donnée personnelle inutile.

## 6. Types d'événements exhaustifs

SKM Stats émet exclusivement les types suivants :

| Type | Déclenchement | Champs métier requis |
| --- | --- | --- |
| `SESSION_STARTED` | Une fois, au démarrage de la session. | Aucun champ d'objectif. |
| `SESSION_ENDED` | Une fois, après le dernier événement de la session. | Aucun champ d'objectif. |
| `OBJECTIVE_STATE_CHANGED` | À la découverte/création d'un objectif puis à chaque changement d'état. | `taskId`, `newStateName` et, lorsqu'ils sont connus, ancienne valeur et valeurs numériques. Ajouter `parentTaskId` pour un enfant. |
| `OBJECTIVE_PROGRESS_CHANGED` | À chaque changement de progression numérique. | `taskId`, `oldProgress`, `newProgress`. Ajouter les états s'ils changent au même instant et `parentTaskId` pour un enfant. |

L'API accepte techniquement une chaîne libre dans `type` pour préserver sa
compatibilité future. Cette tolérance n'autorise pas SKM Stats à émettre un type
non documenté. Ajouter un type impose de mettre à jour le contrat, l'exemple,
l'API, le front et leurs tests avant son utilisation.

## 7. États et progression

Noms d'état canoniques :

| État | Sens |
| --- | --- |
| `CREATED` | Objectif connu mais pas encore assigné. |
| `ASSIGNED` | Objectif actif, sans progression mesurée. |
| `PROGRESSED` | Objectif actif avec une progression partielle. |
| `COMPLETED` | Objectif terminé avec succès. |
| `FAILED` | Objectif terminé en échec. |
| `CANCELLED` | Objectif annulé. |

`COMPLETED`, `FAILED` et `CANCELLED` sont terminaux. Ils comptent tous comme
objectifs accomplis au sens de la complétion globale, tandis que seul
`COMPLETED` représente une réussite.

Règles de production :

- transmettre les couples ancien/nouveau lorsqu'ils sont disponibles ;
- émettre un événement même si la progression diminue ; ne jamais corriger ou
  lisser la valeur observée ;
- une valeur strictement comprise entre 0 et 100 correspond normalement à
  `PROGRESSED` ;
- une valeur de 100 correspond normalement à `COMPLETED`, mais l'état observé
  reste la source de vérité ;
- si état et progression changent ensemble, renseigner les deux dans
  `OBJECTIVE_PROGRESS_CHANGED` ou émettre deux événements ordonnés ;
- ne pas inventer `oldProgress` si la valeur précédente est inconnue.

## 8. Objectifs parents et sous-objectifs

- un objectif racine omet `parentTaskId` ;
- un sous-objectif envoie le `taskId` de son parent direct dans
  `parentTaskId` sur ses événements ;
- plusieurs sous-objectifs peuvent partager le même parent ;
- le parent doit être annoncé avant ses enfants, ou avant eux dans le même lot ;
- le contrat actuel ne gère qu'un niveau enfant : pas de petit-enfant ;
- le parent doit émettre ses propres changements d'état et de progression.

La progression du parent fournie par Reforger est la valeur de référence. SKM
Stats ne doit pas la remplacer par une moyenne calculée localement : Reforger
peut combiner la progression de ses enfants avec une progression propre au
parent.

## 9. Architecture du mod Reforger

Le mod doit rester autonome et indépendant de la mission coopérative. Séparer
strictement trois responsabilités :

1. un collecteur basé sur `SCR_Task` / `SCR_TaskSystem`, chargé de découvrir les
   objectifs initiaux et ceux créés en cours de mission, puis de détecter leurs
   changements ;
2. une file d'attente, chargée de conserver l'ordre et les événements critiques
   non acquittés ;
3. un client REST, chargé uniquement de sérialiser les lots, poser les headers,
   envoyer une requête et interpréter son callback.

Le collecteur doit préserver les `Task ID` natifs et privilégier les événements
du système de tâches plutôt qu'une modification manuelle de chaque objectif.
Une seule requête ordinaire peut être en cours à la fois. Chaque envoi doit
porter un identifiant local afin qu'un callback tardif d'une ancienne tentative
ne puisse pas acquitter un lot plus récent.

Sont hors périmètre : positions, tirs, statistiques de combat, replay et
télémétrie générale.

## 10. Ordre, lots et file d'attente

SKM Stats doit :

- ordonner les événements d'un lot par `timestamp` croissant ;
- utiliser des timestamps distincts lorsque l'ordre métier doit être certain ;
- déclencher l'envoi à partir des événements plutôt que par polling fréquent ;
- ne jamais lancer deux requêtes d'ingestion simultanées ;
- vider la file par lots de 100 maximum, sans dépasser 60 requêtes/minute ;
- conserver les événements non acquittés jusqu'à une réponse HTTP `200` ;
- si possible, persister cette file afin de survivre à un redémarrage ;
- conserver les mêmes `eventId`, valeurs et timestamps lors d'une retransmission.

Des lots peuvent être reçus en retard ou retransmis. L'idempotence repose sur
`eventId`, pas sur l'ordre d'arrivée HTTP.

## 11. Acquittement et reprise sur erreur

Réponse de succès :

```json
{
  "ok": true,
  "received": 9,
  "inserted": 9
}
```

- `received` : nombre d'événements valides reçus dans la requête ;
- `inserted` : nombre d'événements nouveaux réellement insérés ;
- `inserted < received`, y compris `inserted: 0`, est un succès idempotent et
  doit retirer le lot de la file.

| Résultat | Action de SKM Stats |
| --- | --- |
| `2xx` | Vérifier une réponse JSON cohérente (`ok`, `received`, `inserted`), puis acquitter le lot. |
| `400` | Payload invalide : journaliser sans secret, isoler le lot et corriger. Pas de retry aveugle. |
| `401` | Clé incorrecte : alerte de configuration. Pas de retry continu. |
| `403` | `serverId` ou IP refusé : alerte de configuration. Pas de retry continu. |
| `429` | Respecter `Retry-After` s'il existe, puis retry avec backoff exponentiel et jitter. |
| `5xx` | Retry avec backoff exponentiel borné et jitter. |
| Réseau/timeout | Résultat inconnu : retransmettre exactement le même lot et les mêmes `eventId`. |

Le retry ne doit jamais former une boucle serrée. Les journaux doivent inclure
`serverId`, `sessionId`, le nombre d'événements et la cause, mais jamais
`X-Api-Key` ni le payload complet s'il peut contenir une donnée sensible.

## 12. Sécurité et configuration attendue

- utiliser HTTPS hors environnement local ;
- stocker la valeur de `X-Api-Key` comme secret, jamais dans le dépôt, le corps
  JSON ou les logs ;
- configurer un `serverId` stable et autorisé côté API ;
- s'assurer que l'IP publique du producteur est autorisée ;
- prévoir une rotation de clé sans modifier l'identité des sessions ;
- vérifier l'heure système : les timestamps pilotent l'affichage et l'ordre des
  événements.

## 13. Critères d'acceptation

L'intégration est considérée conforme si les tests suivants passent :

1. Le payload complet de [`reforger-events.json`](reforger-events.json) est
   accepté et insère ses 9 événements.
2. La retransmission à l'identique répond `200` avec `inserted: 0`.
3. Une progression décimale et une diminution de progression sont conservées
   sans transformation.
4. Une progression ou un `parentTaskId` sans `taskId` produit un `400`.
5. Un parent et ses deux enfants sont restitués avec la bonne hiérarchie et la
   progression propre du parent.
6. `COMPLETED`, `FAILED` et `CANCELLED` terminent l'objectif sans les confondre
   avec une réussite.
7. Deux sessions ayant le même `sessionId` mais des `serverId` différents
   restent isolées.
8. Une session contient un seul `SESSION_STARTED`, un seul `SESSION_ENDED` et
   aucun événement après sa fin.
9. Les scénarios `400`, `401`, `403`, `429`, `5xx` et timeout appliquent la
   stratégie de reprise décrite ci-dessus.
10. Le backend reçoit réellement `X-Api-Key` émis via `RestContext.SetHeaders()`
    lors d'un test sur serveur Reforger dédié.

## 14. Checklist avant livraison

- [ ] URL, valeur de `X-Api-Key`, `serverId` et timeouts configurables.
- [ ] Identifiants et timestamps stables entre les retries.
- [ ] File d'attente fiable et lots limités à 100.
- [ ] Quatre types d'événements et six états canoniques couverts.
- [ ] Progression du parent et hiérarchie des enfants transmises.
- [ ] Aucun secret dans le code ou les logs.
- [ ] Tests d'idempotence, erreurs et redémarrage exécutés.
