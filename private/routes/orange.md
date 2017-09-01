# Description

Ensemble des routes utilisées par l'application orange

# Production

https://legacy-api-orange.afrostream.tv  (utilisé pour /api, /auth)  
  origine: https://afrostream-backend.herokuapp.com  
https://api-stats.afrostream.tv          (monitoring)  
  origine: https://afrostream-api-stats.herokuapp.com  
https://images.cdn.afrostream.net        (proxy imgix)  
  origine: https://afrostream.imgix.net  
https://origin.cdn.afrostream.net, https://hw.cdn.afrostream.net        (plateforme video) + orange.cdn.afrostream.net  
https://*.drmtoday.com/                  (fixme: url des drm)  

# Dev

https://legacy-api-orange-staging.afrostream.tv  
  origine: https://afr-back-end-staging.herokuapp.com  
https://api-stats-staging.afrostream.tv  
  origine: https://afr-api-stats-staging.herokuapp.com  
https://images-staging.cdn.afrostream.net  
  origine: https://afrostream.imgix.net  
https://origin.cdn.afrostream.net        (plateforme video, identique a la prod)  
https://*.drmtoday.com/                  (fixme: url des drm staging)  

# Remarques

- le dev de wiztv sera notre staging  
- le dev nécessite la création de :  
   legacy-api-orange-staging.afrostream.tv  
   api-stats-staging.afrostream.tv  
   proxy d'images  
- la prod nécessite   
   passage sur highwinds  
   proxy d'images  
- futur :  
  https://auth-screens.afrostream.tv  (verouillage par ecran)  
  https://auth-geo.afrostream.tv      (deplacement de l'auth geographique)  

# Accès Wiki OTVP
URL : https://otis.orange-labs.fr
Login : ludovic.bostral
Password : Vh6D5ySQjuqdMDNL

   
