# Routes de SKM Ingest API

Cette API reçoit les événements de serveurs Arma Reforger et expose les
sessions enregistrées à une application interne.

## Configuration

Variables d'environnement utilisées par l'API :

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Connexion PostgreSQL utilisée par Prisma. |
| `REFORGER_INGEST_API_KEY` | Clé requise dans les payloads d'ingestion. |
| `INTERNAL_API_KEY` | Bearer token protégeant les routes internes. |
| `ALLOWED_REFORGER_SERVER_IDS` | Liste CSV facultative des serveurs autorisés. Une valeur vide autorise tous les serveurs. |
| `ALLOWED_REFORGER_IPS` | Liste CSV facultative des adresses IP autorisées. Une valeur vide autorise toutes les IP. |
| `PORT` | Port d'écoute, `3001` par défaut. |

Toutes les routes sont limitées globalement à 60 requêtes par minute.

## Healthcheck

### `GET /health`

Vérifie que le processus HTTP répond.

Réponse `200` :

```json
{
  "ok": true
}
```

Ce healthcheck ne garantit pas que la base de données est accessible.

## Ingestion Reforger

### `POST /reforger/events`

Enregistre un lot de 100 événements maximum.

En-tête :

```http
Content-Type: application/json
```

Exemple de payload :

```json
{
  "apiKey": "replace-with-your-reforger-api-key",
  "serverId": "local-reforger",
  "sessionId": "session-example-20261108-001",
  "missionId": "olives_and_dates",
  "missionName": "Olives & Dates",
  "events": [
    {
      "eventId": "session-example-20261108-001_000001",
      "type": "SESSION_STARTED",
      "timestamp": 1794132000
    },
    {
      "eventId": "session-example-20261108-001_000002",
      "type": "OBJECTIVE_STATE_CHANGED",
      "taskId": "task_parent_1",
      "taskTitle": "Secure the region",
      "taskDescription": "Complete the two subordinate objectives.",
      "newStateName": "ASSIGNED",
      "newProgress": 0,
      "timestamp": 1794132060
    },
    {
      "eventId": "session-example-20261108-001_000003",
      "type": "OBJECTIVE_STATE_CHANGED",
      "taskId": "task_1_1",
      "parentTaskId": "task_parent_1",
      "taskTitle": "Secure the town",
      "taskDescription": "Eliminate the hostile forces in the objective area.",
      "newStateName": "ASSIGNED",
      "newProgress": 0,
      "timestamp": 1794132070
    },
    {
      "eventId": "session-example-20261108-001_000004",
      "type": "OBJECTIVE_STATE_CHANGED",
      "taskId": "task_1_2",
      "parentTaskId": "task_parent_1",
      "taskTitle": "Hold the radio tower",
      "taskDescription": "Maintain control of the radio tower.",
      "newStateName": "ASSIGNED",
      "newProgress": 0,
      "timestamp": 1794132080
    },
    {
      "eventId": "session-example-20261108-001_000005",
      "type": "OBJECTIVE_PROGRESS_CHANGED",
      "taskId": "task_1_1",
      "parentTaskId": "task_parent_1",
      "oldStateName": "ASSIGNED",
      "newStateName": "PROGRESSED",
      "oldProgress": 0,
      "newProgress": 50.5,
      "timestamp": 1794132300
    },
    {
      "eventId": "session-example-20261108-001_000006",
      "type": "OBJECTIVE_STATE_CHANGED",
      "taskId": "task_1_1",
      "parentTaskId": "task_parent_1",
      "oldStateName": "PROGRESSED",
      "newStateName": "COMPLETED",
      "oldProgress": 50.5,
      "newProgress": 100,
      "timestamp": 1794132600
    },
    {
      "eventId": "session-example-20261108-001_000007",
      "type": "OBJECTIVE_PROGRESS_CHANGED",
      "taskId": "task_1_2",
      "parentTaskId": "task_parent_1",
      "oldStateName": "ASSIGNED",
      "newStateName": "PROGRESSED",
      "oldProgress": 0,
      "newProgress": 30,
      "timestamp": 1794132700
    },
    {
      "eventId": "session-example-20261108-001_000008",
      "type": "OBJECTIVE_PROGRESS_CHANGED",
      "taskId": "task_parent_1",
      "oldStateName": "ASSIGNED",
      "newStateName": "PROGRESSED",
      "oldProgress": 0,
      "newProgress": 65,
      "timestamp": 1794132710
    }
  ]
}
```

Champs d'un événement :

| Champ | Type | Obligatoire | Description |
| --- | --- | --- | --- |
| `eventId` | chaîne | oui | Identifiant globalement unique assurant l'idempotence. |
| `type` | chaîne | oui | Type d'événement, par exemple `SESSION_STARTED` ou `OBJECTIVE_STATE_CHANGED`. |
| `timestamp` | nombre | oui | Timestamp Unix exprimé en secondes. |
| `taskId` | chaîne | non | Identifiant de l'objectif dans Reforger. |
| `parentTaskId` | chaîne | non | Identifiant de l'objectif parent pour un sous-objectif. |
| `taskTitle` | chaîne | non | Titre de l'objectif, limité à 250 caractères. |
| `taskDescription` | chaîne | non | Description de l'objectif, limitée à 4 000 caractères. |
| `oldState` | nombre | non | Valeur numérique de l'ancien état. |
| `oldStateName` | chaîne | non | Nom de l'ancien état. |
| `newState` | nombre | non | Valeur numérique du nouvel état. |
| `newStateName` | chaîne | non | Nom du nouvel état. |
| `oldProgress` | nombre | non | Progression précédente, comprise entre 0 et 100. |
| `newProgress` | nombre | non | Nouvelle progression, comprise entre 0 et 100. |

`oldProgress` et `newProgress` acceptent des valeurs décimales. Ils doivent
être associés à un `taskId`. Une progression supérieure à `0` correspond
normalement à l'état `PROGRESSED`, puis une progression à `100` à l'état
`COMPLETED`. Les événements sans progression restent valides.

Pour une hiérarchie d'objectifs :

- le parent est un objectif normal sans `parentTaskId` ;
- chaque enfant utilise le même `parentTaskId` ;
- le parent envoie également ses propres changements d'état et de progression ;
- l'API conserve les valeurs reçues et ne moyenne pas elle-même les enfants.

Réponse `200` :

```json
{
  "ok": true,
  "received": 8,
  "inserted": 8
}
```

`received` correspond au nombre d'événements reçus. `inserted` correspond au
nombre d'événements réellement créés. Un `eventId` déjà enregistré est ignoré
et n'augmente pas `inserted`.

Erreurs possibles :

| Statut | Cause |
| --- | --- |
| `400` | Payload invalide ou lot supérieur à 100 événements. |
| `401` | `apiKey` incorrecte. |
| `403` | `serverId` ou adresse IP non autorisé. |
| `429` | Limite de requêtes dépassée. |

## API interne

Toutes les routes internes nécessitent cet en-tête :

```http
Authorization: Bearer <INTERNAL_API_KEY>
```

Une authentification absente ou incorrecte retourne `401`.

### `GET /internal/sessions`

Retourne les sessions, de la plus récemment créée à la plus ancienne.

Paramètres de query :

| Paramètre | Défaut | Description |
| --- | --- | --- |
| `page` | `1` | Numéro de page positif. |
| `pageSize` | `12` | Nombre de sessions par page, limité à 50. |
| `q` | aucun | Recherche insensible à la casse, limitée à 80 caractères. |

La recherche porte sur `serverId`, `sessionId`, `missionId` et `missionName`.

Exemple :

```http
GET /internal/sessions?page=1&pageSize=12&q=olives
Authorization: Bearer <INTERNAL_API_KEY>
```

Réponse `200` :

```json
{
  "ok": true,
  "sessions": [
    {
      "id": "database-session-id",
      "serverId": "local-reforger",
      "sessionId": "session-example-20261108-001",
      "missionId": "olives_and_dates",
      "missionName": "Olives & Dates",
      "startedAt": "2026-11-08T10:00:00.000Z",
      "endedAt": null,
      "createdAt": "2026-11-08T10:00:00.000Z",
      "updatedAt": "2026-11-08T10:00:00.000Z",
      "_count": {
        "events": 8
      }
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 12,
    "total": 1,
    "totalPages": 1
  }
}
```

### `GET /internal/servers/:serverId/sessions/:sessionId`

Retourne une session précise, ses objectifs et ses événements.

Cette route est la route recommandée, car un même `sessionId` peut être
utilisé par plusieurs serveurs.

Exemple :

```http
GET /internal/servers/local-reforger/sessions/session-example-20261108-001
Authorization: Bearer <INTERNAL_API_KEY>
```

Réponse `200` :

Pour rester lisible, l'exemple ci-dessous ne montre qu'un événement et deux
objectifs représentatifs. La réponse réelle contient tous les objectifs et tous
les événements de la session.

```json
{
  "ok": true,
  "session": {
    "id": "database-session-id",
    "serverId": "local-reforger",
    "sessionId": "session-example-20261108-001",
    "missionId": "olives_and_dates",
    "missionName": "Olives & Dates",
    "startedAt": "2026-11-08T10:00:00.000Z",
    "endedAt": null,
    "createdAt": "2026-11-08T10:00:00.000Z",
    "updatedAt": "2026-11-08T10:10:00.000Z",
    "objectives": [
      {
        "id": "database-parent-objective-id",
        "sessionDbId": "database-session-id",
        "taskId": "task_parent_1",
        "parentTaskId": null,
        "title": "Secure the region",
        "description": "Complete the two subordinate objectives.",
        "createdAt": "2026-11-08T10:01:00.000Z",
        "updatedAt": "2026-11-08T10:01:00.000Z"
      },
      {
        "id": "database-objective-id",
        "sessionDbId": "database-session-id",
        "taskId": "task_1_1",
        "parentTaskId": "task_parent_1",
        "title": "Secure the town",
        "description": "Eliminate the hostile forces in the objective area.",
        "createdAt": "2026-11-08T10:10:00.000Z",
        "updatedAt": "2026-11-08T10:10:00.000Z"
      }
    ],
    "events": [
      {
        "id": "database-event-id",
        "eventId": "session-example-20261108-001_000006",
        "sessionDbId": "database-session-id",
        "type": "OBJECTIVE_STATE_CHANGED",
        "taskId": "task_1_1",
        "objectiveDbId": "database-objective-id",
        "oldState": null,
        "oldStateName": "PROGRESSED",
        "newState": null,
        "newStateName": "COMPLETED",
        "oldProgress": 50.5,
        "newProgress": 100,
        "eventTimestamp": "2026-11-08T10:10:00.000Z",
        "rawJson": {},
        "createdAt": "2026-11-08T10:10:00.000Z"
      }
    ]
  }
}
```

Les objectifs sont triés par `taskId`. Les événements sont triés par
`eventTimestamp`, du plus ancien au plus récent.

### Vérifications Postman recommandées

Après application de la migration :

1. utiliser des `sessionId` et `eventId` uniques ;
2. ingérer un parent et au moins deux enfants partageant son `taskId` comme
   `parentTaskId` ;
3. vérifier les valeurs décimales et les limites `0` et `100` ;
4. vérifier qu'une progression sans `taskId`, inférieure à `0` ou supérieure à
   `100` retourne `400` ;
5. relire la session par la route interne et vérifier la hiérarchie ainsi que
   `oldProgress` et `newProgress` ;
6. renvoyer le même `eventId` et vérifier que `inserted` vaut `0`.

Erreurs possibles :

| Statut | Cause |
| --- | --- |
| `401` | Bearer token absent ou incorrect. |
| `404` | Couple `serverId` et `sessionId` inconnu. |

### `GET /internal/sessions/:sessionId`

Ancienne route conservée pour compatibilité. Il est recommandé d'utiliser la
route contenant également le `serverId`.

Réponses possibles :

| Statut | Cause |
| --- | --- |
| `200` | Une seule session correspond au `sessionId`. |
| `401` | Bearer token absent ou incorrect. |
| `404` | Aucune session ne correspond au `sessionId`. |
| `409` | Plusieurs serveurs utilisent ce même `sessionId`. |

Réponse `409` :

```json
{
  "error": "Ambiguous sessionId",
  "message": "Use /internal/servers/:serverId/sessions/:sessionId"
}
```
