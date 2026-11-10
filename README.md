# skm-ingest-api
SKM Ingest API is a lightweight Fastify-based backend service designed to receive, validate, and store live telemetry and mission events from Arma Reforger servers.  The service acts as a secure ingestion layer between Reforger gameplay sessions and external analytics or administration systems.

## Fonctionnement et sécurité du rate limiting

Le rate limiting identifie chaque client avec l'adresse IP fournie par l'en-tête
`CF-Connecting-IP`, ajouté automatiquement par Cloudflare/Render. Cet en-tête
n'est pas une variable d'environnement. Les valeurs `X-Forwarded-For` envoyées
par le client ne sont pas utilisées.

Chaque IP possède son propre quota de 60 requêtes par minute :

- une IP inconnue obtient automatiquement son propre compteur dès sa première
  requête ;
- deux IP différentes disposent de deux quotas indépendants ;
- les requêtes 1 à 60 sont autorisées et la 61e reçoit `429 Too Many Requests` ;
- les adresses IPv6 d'un même sous-réseau `/64` partagent le même compteur ;
- le quota est commun à toutes les routes protégées ;
- `GET /health` est explicitement exempté.

Pour `POST /reforger/events`, les contrôles sont effectués dans cet ordre :

1. rate limiting par IP ;
2. validation de la clé API ;
3. validation du `serverId` ;
4. validation de l'IP avec `ALLOWED_REFORGER_IPS`.

Une valeur vide pour `ALLOWED_REFORGER_IPS` ou
`ALLOWED_REFORGER_SERVER_IDS` autorise toutes les valeurs correspondantes. En
production, ces variables doivent donc être renseignées pour appliquer une
whitelist stricte.

Les compteurs sont actuellement conservés en mémoire dans le processus
Fastify. Cette configuration convient à une seule instance Render, mais les
compteurs sont réinitialisés à chaque redémarrage ou déploiement. Avec plusieurs
instances ou de l'autoscaling, chaque instance aurait son propre quota ; un
store Redis partagé deviendrait alors nécessaire.

Le rate limiting limite les abus simples, mais ne remplace pas
l'authentification : un attaquant utilisant plusieurs adresses IP dispose d'un
quota par IP, et plusieurs utilisateurs partageant une même adresse publique
partagent le même quota.

## Rate-limit verification with Postman

`GET /health` is explicitly excluded from rate limiting so that platform health
checks cannot make the service unhealthy. Use `GET /internal/sessions` without
an `Authorization` header to verify the global limit without querying the
database.

In Postman Collection Runner, run the request 65 times with no delay and finish
the run in less than one minute. Wait at least one minute before starting a new
run, and do not set `X-Forwarded-For` or `CF-Connecting-IP` manually.

Expected results from a single client IP:

- requests 1 through 60 return `401 Unauthorized`;
- requests 61 through 65 return `429 Too Many Requests`;
- every response includes `x-ratelimit-limit: 60`;
- the 60th response includes `x-ratelimit-remaining: 0`;
- responses after the limit include `retry-after`.

The following Postman test script validates the run:

```js
const requestNumber = pm.info.iteration + 1;

pm.test(`Request ${requestNumber}: expected rate-limit status`, function () {
    pm.expect(pm.response.headers.get("x-ratelimit-limit")).to.eql("60");

    if (requestNumber <= 60) {
        pm.expect(pm.response.code).to.eql(401);
    } else {
        pm.expect(pm.response.code).to.eql(429);
        pm.expect(pm.response.headers.has("retry-after")).to.eql(true);
    }
});
```
