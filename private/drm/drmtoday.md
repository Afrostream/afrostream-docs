1) DRMtoday
Your login credentials (please change the password after first login):



Please note that you have access to two different environments: STAGING (for testing) and PRODUCTION.
As the guaranteed uptime&availability only applies to the production environment, we strongly encourage you to use it for your production site. Staging should only be used for your internal testing.
You can access the administration UIs at:
https://fe.staging.drmtoday.com
and
https://fe.drmtoday.com

Adobe Access:

Staging: https://lic.staging.drmtoday.com/flashaccess/LicenseTrigger/v1
Production: https://lic.drmtoday.com/flashaccess/LicenseTrigger/v1
Google Widevine Modular:

Staging: https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/
Production: https://lic.drmtoday.com/license-proxy-widevine/cenc/
The Widevine Modular backend can return licenses as binary data according to the Widevine specifications or as base64-encoded data within a JSON object as done by the Google Sample proxy. The desired format can be chosen with the parameter specConform. Set to true to retrieve response in binary format, otherwise a JSON will be returned.

Example:

Staging: https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true
Production: https://lic.drmtoday.com/license-proxy-widevine/cenc/?specConform=true
Microsoft PlayReady:

Staging: https://lic.staging.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx
Production: https://lic.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx

