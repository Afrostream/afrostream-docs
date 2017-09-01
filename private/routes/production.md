# Production

## front

#### config 

fqdn: afrostream.tv  
protocol: https  
cdn: fastly  
origin: afrostream.herokuapp.com  

#### network

Browser -> fastly: afrostream.tv  -> heroku: afrostream.herokuapp.com

#### examples

https://afrostream.tv/  
https://afrostream.tv/132/new-beginnings  
https://afrostream.tv/favoris  

#### notes

fastly setup: https://app.fastly.com/#analytics/hc67hHS6Htz3hw4rEVvcc  
heroku setup: https://dashboard.heroku.com/apps/afrostream/resources  

#### futur

fqdn: afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-front-end.herokuapp.com  

## api-front

#### config

fqdn: afrostream-api-v1-herokuapp-com.global.ssl.fastly.net  
protocol: https  
cdn: fastly  
origin: afrostream-api-v1.herokuapp.com  

fqdn: api.afrostream.tv  
protocol: https  
cdn: N/A  
origin: afrostream-api-v1.herokuapp.com  

#### network

Browser -> fastly: afrostream-api-v1-herokuapp-com.global.ssl.fastly.net -> heroku: afrostream-api-v1.herokuapp.com  
Browser -> heroku: api.afrostream.tv

#### examples

https://afrostream-api-v1-herokuapp-com.global.ssl.fastly.net/api/categories/spot  
https://afrostream-api-v1-herokuapp-com.global.ssl.fastly.net/api/categorys/  
https://afrostream-api-v1-herokuapp-com.global.ssl.fastly.net/auth/geo  

#### notes

fastly: https://addons-sso.heroku.com/apps/afrostream-api-v1/addons/7704d815-dfaf-4c63-bd2a-101860197254  
heroku: https://dashboard.heroku.com/apps/afrostream-api-v1/resources  

#### futur

fqdn: api-front.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-api-front.herokuapp.com  

## backend

#### config

* call api-v1 => backend

fqdn: afrostream-backend.herokuapp.com  
protocol: http  
cdn: N/A  
origin: afrostream-backend.herokuapp.com  

* call Taptic (iOS/Android) / Roku 

fqdn: legacy-api.afrostream.tv  
protocol: https  
cdn: fastly  
origin: afrostream-backend.herokuapp.com  

#### network

* call api-v1 => backend
 
Browser -> fastly: afrostream-api-v1-herokuapp-com.global.ssl.fastly.net -> heroku: afrostream-api-v1.herokuapp.com -> heroku: afrostream-backend.herokuapp.com

* call Taptic (iOS/Android) / Roku

App -> fastly: legacy-api.afrostream.tv -> heroku: afrostream-backend.herokuapp.com 

#### examples

https://legacy-api.afrostream.tv/alive  
https://legacy-api.afrostream.tv/auth/geo  

#### notes

heroku: https://dashboard.heroku.com/apps/afrostream-backend/resources  
fastly: https://app.fastly.com/#analytics/2gWHHdq2XZR7C6x6QBEMue (API Afrostream)  

#### futur

* call api-v1 > backend:

fqdn: afr-back-end.afrostream.tv  
protocol: https  
cdn: N/A  
origin: afr-back-end.afrostream.tv  

* call Taptic/Roku > backend:

fqdn: legacy-api.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-back-end.afrostream.tv  

## api stats

#### config

fqdn: stats.afrostream.tv  
protocol: https  
cdn: N/A  
origin: afrostream-api-stats.herokuapp.com  

#### network

Browser -> heroku: afrostream-api-stats.herokuapp.com

#### examples

https://stats.afrostream.tv/alive

#### notes

heroku: https://dashboard.heroku.com/apps/afrostream-api-stats/resources

#### futur

fqdn: auth-oauth.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-auth-oauth.herokuapp.com  

## auth-oauth

#### config

[ NOT YET IMPLEMENTED ] 

#### network

[ NOT YET IMPLEMENTED ]

#### examples

[ NOT YET IMPLEMENTED ]

#### notes

[ NOT YET IMPLEMENTED ]

#### futur

fqdn: auth-oauth.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-auth-oauth.herokuapp.com  

## auth-screens

#### config

[ NOT YET IMPLEMENTED ] 

#### network

[ NOT YET IMPLEMENTED ]

#### examples

[ NOT YET IMPLEMENTED ]

#### notes

[ NOT YET IMPLEMENTED ]

#### futur

fqdn: auth-screens.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-auth-screens.herokuapp.com  

## auth-geo

#### config

[ NOT YET IMPLEMENTED ] 

#### network

[ NOT YET IMPLEMENTED ]

#### examples

[ NOT YET IMPLEMENTED ]

#### notes

[ NOT YET IMPLEMENTED ]

#### futur

fqdn: auth-geo.afrostream.tv  
protocol: https  
cdn: FIXME  
origin: afr-auth-geo.herokuapp.com  

## afrostream-jobs

#### config

fqdn: afrostream-jobs.afrostream.tv  
protocol: https  
cdn: N/A  

#### network

[ NOT YET IMPLEMENTED ]

#### examples

[ NOT YET IMPLEMENTED ]

#### notes

GUI: https://afrostream-jobs.afrostream.tv/api  
login: afrostream  
password: https://github.com/Afrostream/afrostream-jobs/blob/master/config/environment/production.js#L11  

#### futur

fqdn: afrostream-jobs.afrostream.tv  
protocol: https  
cdn: N/A
