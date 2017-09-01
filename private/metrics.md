# Nomenclature des metrics

```
{nom-du-projet-github}.{env}.container.{containerId}.worker.{workerId}.{key}
```

## nom de projets github

```
afrostream-back-end
afrostream-billings
```

## env

```
development
test
staging
production
```

## containerId

identifiant du container docker / heroku.  

heroku: variable d'environnement DYNO dans laquelle on remplace "." par "-"

```js
var containerId = process.env.DYNO && String(process.env.DYNO).replace(/\./g, '-') || "unknown";
```

## workerId

identifiant du process
Attention: il faut que cet identifiant soit dans une liste fermée d'éléments (ex: max=16), si impossible => on met 0.  

sous nodejs @see https://github.com/Afrostream/afrostream-node-statsd/blob/master/index.js#L12

```js
cluster.worker.id % numCPUs;
```

## Exemples
exemples

```
afrostream-back-end.production.container.24242242.worker.1.route.all.hit         # http request received
afrostream-back-end.production.container.24242242.worker.1.route.all.success     # 200
afrostream-back-end.production.container.24242242.worker.1.route.all.error       # 4xx,5xx
afrostream-back-end.production.container.24242242.worker.1.route.all.redirect    # 3xx
```

# Projet afrostream-back-end

## routage

```
# routage
route.all.hit
route.all.success
route.all.error
route.all.redirect

route.api.video.hit
route.api.video.success
route.api.video.error
route.api.video.redirect

# sous categories: route.{routeName}.infos.{key.val}
route.all.infos.country.FR.hit
route.api.video.infos.broadcaster.ONEW.hit
route.api.video.infos.broadcaster.WEB.hit
```

## requests

outgoing calls

```
# requests
request.pf.hit
request.pf.success
request.pf.error
request.pf.redirect

#
request.billing-api.hit
request.billing-api.success
request.billing-api.error
request.billing-api.redirect
```
