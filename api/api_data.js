define({ "api": [
  {
    "type": "get",
    "url": "/api/actors/:id",
    "title": "Request Actor information",
    "name": "GetActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Actor unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Info of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetId",
            "description": "<p>AssetId Related.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "captionId",
            "description": "<p>CaptionId Related.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/actor/index.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/api/categorys/:id/spots",
    "title": "Request All AdSpot for HomePage Carousel",
    "name": "GetAdSpots",
    "group": "AdSpots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Movie",
            "description": "<p>AdSpot list.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/categorys/1/spots",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/categorys/1/spots"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "AdSpots"
  },
  {
    "type": "post",
    "url": "/auth/oauth2/token",
    "title": "Oauth2 token",
    "name": "PostAuthOauth2Token",
    "group": "Auth",
    "description": "<p>this route allows you to get an access_token</p>",
    "parameter": {
      "fields": {
        "postData": [
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>client_credentials|password|bouygues|refresh_token</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>api client id</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>api client secret</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>(grant_type=password) user email</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(grant_type=password) user password</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>(grant_type=bouygues) bouygues customer id</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>(grant_type=refresh_token) refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "grant_type: \"client_credentials\"",
          "content": "{\n  \"grant_type\": \"client_credentials\",\n  \"client_id\": \"apiKey\",\n  \"client_secret\": \"apiSecret\"\n}",
          "type": "String"
        },
        {
          "title": "grant_type: \"password\"",
          "content": "{\n  \"grant_type\": \"password\",\n  \"client_id\": \"apiKey\",\n  \"client_secret\": \"apiSecret\",\n  \"username\": \"foo@bar.com\",\n  \"password\": \"123456\"\n}",
          "type": "String"
        },
        {
          "title": "grant_type: \"bouygues\"",
          "content": "{\n  \"grant_type\": \"bouygues\",\n  \"client_id\": \"apiKey\",\n  \"client_secret\": \"apiSecret\",\n  \"id\": \"123456\"\n}",
          "type": "String"
        },
        {
          "title": "grant_type: \"refresh_token\"",
          "content": "{\n  \"grant_type\": \"refresh_token\",\n  \"client_id\": \"apiKey\",\n  \"client_secret\": \"apiSecret\",\n  \"refresh_token\": \"42424242424242\"\n}",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "premier example",
        "content": "premier example",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>hexa string 32 char</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "expires_in",
            "description": "<p>seconds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"9d005b334087f302986312ec572e39e46e63830b\",\n  \"expires_in\": \"1800\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response grant_type password",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"invalid_grant\",\n  \"error_description\": \"unknown user\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response grant_type password",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"invalid_grant\",\n  \"error_description\": \"wrong password\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response grant_type bouygues",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"invalid_grant\",\n  \"error_description\": \"unknown bouyguesId\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/auth/oauth2/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/billings/subscriptions",
    "title": "Create a subscription",
    "name": "CreateBillingSubscription",
    "group": "Billing",
    "parameter": {
      "fields": {
        "postData": [
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "internalPlanUuid",
            "description": "<p>from /api/billings/internalplans</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "subscriptionProviderUuid",
            "description": "<p>ex: bouygues subscription id</p>"
          },
          {
            "group": "postData",
            "type": "Object",
            "optional": false,
            "field": "subOpts",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "subOpts",
          "content": "{\n    \"requestId\": \"requestIdValue\",\n    \"promoEnabled\": \"false\",\n    \"promoItemBasePrice\": \"0\",\n    \"promoItemTaxAmount\": \"20\",\n    \"promoItemTotal\": \"0\",\n    \"promoCurrency\": \"EUR\",\n    \"promoPeriod\": \"1\",\n    \"promoDuration\": \"0\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n    \"subscriptionBillingUuid\": \"SubscriptionBillingUUID\",\n    \"subscriptionProviderUuid\": \"SubscriptionProviderUUID\",\n    \"isActive\": \"yes\",\n    \"user\": {\n      \"userBillingUuid\": \"UserBillingUUID\",\n      \"userReferenceUuid\": \"afrostreamUUID\",\n      \"userProviderUuid\": \"UserProviderUUID\",\n      \"provider\": {\n        \"providerName\": \"bachat\"\n      },\n      \"userOpts\": {\n        \"email\": \"email@domain.com\",\n        \"firstName\": \"myFirstName\",\n        \"lastName\": \"myLastName\"\n      }\n    },\n    \"provider\": {\n      \"providerName\": \"bachat\"\n    },\n    \"internalPlan\": {\n      \"internalPlanUuid\": \"bachat-afrostreamdaily\",\n      \"name\": \"bachat-afrostreamdaily\",\n      \"description\": \"bachat-afrostreamdaily\",\n      \"amountInCents\": \"199\",\n      \"amountInCentsExclTax\": \"159\",\n      \"vatRate\": \"20,00\",\n      \"currency\": \"EUR\",\n      \"cycle\": \"auto\",\n      \"periodUnit\": \"day\",\n      \"periodLength\": \"1\",\n      \"internalPlanOpts\": {\n      \"promoEnabled\": \"false\",\n      \"promoItemBasePrice\": \"0\",\n      \"promoItemTaxAmount\": \"20\",\n      \"promoItemTotal\": \"0\",\n      \"promoCurrency\": \"EUR\",\n      \"promoPeriod\": \"1\",\n      \"promoDuration\": \"0\"\n    },\n    \"thumb\": {\n      \"path\": \"/staging/billings/afrolover.jpg\",\n        \"imgix\": \"https://afrostream.imgix.net/staging/billings/afrolover.jpg\"\n    }\n  },\n  \"creationDate\": \"2015-12-25 12:00:00+00\",\n  \"updatedDate\": \"2015-12-25 12:00:00+00\",\n  \"subStatus\": \"active\",\n  \"subActivatedDate\": \"2015-12-25 12:00:00+00\",\n  \"subCanceledDate\": null,\n  \"subExpiresDate\": null,\n  \"subPeriodStartedDate\": \"2015-12-25 12:00:00+00\",\n  \"subPeriodEndsDate\": \"2016-01-25 12:00:00+00\",\n  \"subOpts\": {\n  \"requestId\": \"requestIdValue\",\n    \"promoEnabled\": \"false\",\n    \"promoItemBasePrice\": \"0\",\n    \"promoItemTaxAmount\": \"20\",\n    \"promoItemTotal\": \"0\",\n    \"promoCurrency\": \"EUR\",\n    \"promoPeriod\": \"1\",\n    \"promoDuration\": \"0\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n{\n  \"error\": \"whatever\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/app/api/billing/index.js",
    "groupTitle": "Billing"
  },
  {
    "type": "get",
    "url": "/api/billings/internalplans",
    "title": "List plans",
    "name": "GetBillingInternalplans",
    "group": "Billing",
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n{\n  \"error\": \"whatever\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n{\n  internalPlanUuid: \"bachat-afrostreammonthly\",\n  name: \"Mensuel\",\n  description: \"Mensuel\",\n  amountInCents: \"699\",\n  amountInCentsExclTax: \"559\",\n  vatRate: \"20\",\n  currency: \"EUR\",\n  cycle: \"auto\",\n  periodUnit: \"day\",\n  periodLength: \"30\",\n  internalPlanOpts: {\n    promoEnabled: \"true\",\n    promoItemBasePrice: \"0\",\n    promoItemTaxAmount: \"20\",\n    promoItemTotal: \"0\",\n    promoCurrency: \"EUR\",\n    promoPeriod: \"30\",\n    promoDuration: \"0\"\n  },\n  providerPlans: {\n    bachat: {\n      providerPlanUuid: \"bachat-afrostreammonthly\",\n      name: \"bachat-afrostreammonthly\",\n      description: \"bachat-afrostreammonthly\",\n      provider: {\n        providerName: \"bachat\"\n      }\n    }\n  }\n},\n{\n  internalPlanUuid: \"bachat-afrostreamdaily\",\n  name: \"Jour\",\n  description: \"Jour\",\n  amountInCents: \"199\",\n  amountInCentsExclTax: \"159\",\n  vatRate: \"20\",\n  currency: \"EUR\",\n  cycle: \"auto\",\n  periodUnit: \"day\",\n  periodLength: \"1\",\n  internalPlanOpts: {\n    promoEnabled: \"false\",\n    promoItemBasePrice: \"0\",\n    promoItemTaxAmount: \"20\",\n    promoItemTotal: \"0\",\n    promoCurrency: \"EUR\",\n    promoPeriod: \"1\",\n    promoDuration: \"0\"\n  },\n  providerPlans: {\n    bachat: {\n      providerPlanUuid: \"bachat-afrostreamdaily\",\n      name: \"bachat-afrostreamdaily\",\n      description: \"bachat-afrostreamdaily\",\n      provider: {\n        providerName: \"bachat\"\n      }\n    }\n  }\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/app/api/billing/index.js",
    "groupTitle": "Billing"
  },
  {
    "type": "get",
    "url": "/api/categorys/",
    "title": "Request Category list",
    "parameter": {
      "fields": {
        "queryString": [
          {
            "group": "queryString",
            "type": "String",
            "optional": false,
            "field": "populate",
            "description": "<p>object associations</p>"
          },
          {
            "group": "queryString",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>limit the number of categories returned, 0 = unlimited, default=unlimited</p>"
          },
          {
            "group": "queryString",
            "type": "String",
            "optional": false,
            "field": "limitMovies",
            "description": "<p>limit the number of movies in categories.movies returned, 0 = unlimited, default=unlimited</p>"
          },
          {
            "group": "queryString",
            "type": "String",
            "optional": false,
            "field": "limitAdSpots",
            "description": "<p>limit the number of movies categories.adSpots returned, 0 = unlimited, default=unlimited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "populate",
          "content": "?populate=movies\n?populate=adSpots\n?populate=movies,adSpots (default)\n?populate=movies.poster,movies.thumb,adSpots\n\nlist of associations:\n  movies,movies.categorys,movies.logo,movies.poster,movies.thumb,\n  adSpots,adSpots.categorys,adSpots.logo,adSpots.poster,adSpots.thumb",
          "type": "json"
        }
      ]
    },
    "name": "GetAllCategorys",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "(200) {json} Success-Response:",
          "content": "[\n   {\n      id: ...\n      (...)\n   },\n   (...)\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/categorys/:id",
    "title": "Request Category information",
    "name": "GetCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Name of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug url of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seasonId",
            "description": "<p>Associated Season Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "season",
            "description": "<p>Associated Season Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movies",
            "description": "<p>Associated Movies Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adSpots",
            "description": "<p>Associated AdSpots Object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/categorys/3",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/categorys/3"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/episodes/:id",
    "title": "Request Episode information",
    "name": "GetEpisode",
    "group": "Episode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Episode unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the Episode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>Date start Episode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>Date end Episode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the Episode (episode).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>Description of the Episode..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration in seconds of the Episode..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug url of the Episode..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seasonId",
            "description": "<p>Associated Season Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "season",
            "description": "<p>Associated Season Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>Associated Video Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poster",
            "description": "<p>Poster Image Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>Thumb Image Object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/episodes/426",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/episodes/426"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/episode/index.js",
    "groupTitle": "Episode"
  },
  {
    "type": "get",
    "url": "/api/genres/:id",
    "title": "Request Genre information",
    "name": "GetGenre",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Genre unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Episode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bouyguesIngridName",
            "description": "<p>bouygues name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bouyguesIngridCode",
            "description": "<p>bouygues code.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/genre/index.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/genres/",
    "title": "Request Genre list",
    "name": "GetGenres",
    "group": "Genre",
    "version": "0.0.0",
    "filename": "server/app/api/genre/index.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/api/categorys/mea",
    "title": "Request All mea for HomePage",
    "name": "GetMea",
    "group": "Mea",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Category",
            "description": "<p>list.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/categorys/meas",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/categorys/meas"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "Mea"
  },
  {
    "type": "get",
    "url": "/api/categorys/menu",
    "title": "Request Menu Home information",
    "name": "GetCategoryMenu",
    "group": "Menu",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Category",
            "description": "<p>list.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/categorys/menu",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/categorys/menu"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/api/categorys/menu",
    "title": "Request Menu Home information",
    "name": "GetCategoryMenu",
    "group": "Menu",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Category",
            "description": "<p>list.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seasonId",
            "description": "<p>Associated Season Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "season",
            "description": "<p>Associated Season Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movies",
            "description": "<p>Associated Movies Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adSpots",
            "description": "<p>Associated AdSpots Object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/categorys/3",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/categorys/3"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/category/index.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/api/movies/:id",
    "title": "Request Movie information",
    "name": "GetMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Movie unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>Date start Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>Date end Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the Movie (season/movie).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>Description of the Movie..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration in seconds of the Movie..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug url of the Movie..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categorys",
            "description": "<p>Associated Categorys.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seasons",
            "description": "<p>Associated Seasons list.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poster",
            "description": "<p>Poster Image Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>Thumb Image Object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/movies/29",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/movies/29"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/movie/index.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/api/episodes/search",
    "title": "Search episode",
    "name": "EpisodeSearch",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/episode/index.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "/api/movies/search",
    "title": "Search movie",
    "name": "MovieSearch",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/movie/index.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "/api/seasons/search",
    "title": "Search season",
    "name": "SeasonSearch",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>query string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/season/index.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/seasons/:id",
    "title": "Request Season information",
    "name": "GetSeason",
    "group": "Season",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Season unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the Season.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>Date start Season.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>Date end Season.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>Description of the Season..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "movie",
            "description": "<p>Associated Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "episodes",
            "description": "<p>Associated Episodes list.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poster",
            "description": "<p>Poster Image Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumb",
            "description": "<p>Thumb Image Object.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/seasons/29",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/seasons/29"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/season/index.js",
    "groupTitle": "Season"
  },
  {
    "type": "post",
    "url": "/api/users/:userId/favoritesEpisodes/",
    "title": "Add episode to favorites",
    "name": "AddFavoriteEpisode",
    "description": "<p>this api call return the episode object added</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "PostData": [
          {
            "group": "PostData",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Episode ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteEpisode/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/:userId/favoritesMovies/",
    "title": "Add movie to favorites",
    "name": "AddFavoriteMovie",
    "description": "<p>this api call return the movie object added</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "PostData": [
          {
            "group": "PostData",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Movie ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteMovie/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/:userId/favoritesSeasons/",
    "title": "Add season to favorites",
    "name": "AddFavoriteSeason",
    "description": "<p>this api call return the season object added</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "PostData": [
          {
            "group": "PostData",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Season ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteSeason/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/",
    "title": "Create",
    "name": "CreateUser",
    "group": "User",
    "header": {
      "fields": {
        "header": [
          {
            "group": "header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>ClientToken (issued from  grant_type: 'client_credentials')</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "postData": [
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(optionnal)</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>(optionnal)</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>(optionnal)</p>"
          },
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "bouyguesId",
            "description": "<p>(mandatory, if apiKey bouygues)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>hexa string 32 char</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "expires_in",
            "description": "<p>seconds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"9d005b334087f302986312ec572e39e46e63830b\",\n  \"expires_in\": \"1800\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"whatever\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId/favoritesEpisodes/",
    "title": "Request favorites episodes list",
    "name": "GetFavoritesEpisodes",
    "description": "<p>this api call return the favorites episodes object list</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteEpisode/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId/favoritesMovies/",
    "title": "Request favorites movies list",
    "name": "GetFavoritesMovies",
    "description": "<p>this api call return the favorites movies object list</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteMovie/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId/favoritesSeasons/",
    "title": "Request favorites seasons list",
    "name": "GetFavoritesSeasons",
    "description": "<p>this api call return the favorites seasons object list</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteSeason/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "planCode",
            "description": "<p>Payment Plan Code of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "subscriptionsStatus",
            "description": "<p>light version of the content on GET /api/subscriptions/status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"foo\",\n  \"email\": \"foo@foo.com\",\n  \"role\": \"admin\",\n  \"planCode\": \"afrostreamambassadeur2\",\n  \"subscriptionsStatus\": {\n    \"planCode\": \"afrostreamambassadeur2\",\n    \"promo\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:userId/favoritesEpisodes/:episodeId",
    "title": "Remove episode from favorites",
    "name": "RemoveFavoriteEpisode",
    "description": "<p>this api call return nothing :)</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "episodeId",
            "description": "<p>Episode ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteEpisode/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:userId/favoritesMovies/:movieId",
    "title": "Remove movie from favorites",
    "name": "RemoveFavoriteMovie",
    "description": "<p>this api call return nothing :)</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "movieId",
            "description": "<p>Movie ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteMovie/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:userId/favoritesSeasons/:seasonId",
    "title": "Remove season from favorites",
    "name": "RemoveFavoriteSeason",
    "description": "<p>this api call return nothing :)</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "seasonId",
            "description": "<p>Season ID</p>"
          }
        ],
        "Header": [
          {
            "group": "Header",
            "type": "BearerToken",
            "optional": false,
            "field": "authorization",
            "description": "<p>only authentified user can access this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/favoriteSeason/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/me",
    "title": "Update",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "postData": [
          {
            "group": "postData",
            "type": "String",
            "optional": false,
            "field": "bouyguesId",
            "description": "<p>(optionnal, allowed only if token is issued to bouygues apiClient)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (profile data) :",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": ...,\n  \"email\": ...,\n  \"_id\": ...\n  ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"whatever\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId/videos/:videoId",
    "title": "Read User-Video Association",
    "name": "getUsersVideos",
    "description": "<p>this api call read the association data between a user and a video (audio language, caption language, rating, player position)</p>",
    "group": "User_Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "videoId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dataStartRead",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateLastRead",
            "description": "<p>date of last playerPosition update</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "playerAudio",
            "description": "<p>ISO6392T 3 letters lowercase, null if none</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "playerCaption",
            "description": "<p>ISO6392T 3 letters lowercase, null if none</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "playerPosition",
            "description": "<p>position in &quot;seconds&quot;, null if none</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rating",
            "description": "<p>enum:{ 1, 2, 3, 4, 5 }, null if none</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\":4065487,\n  \"userId\":1,\n  \"videoId\":\"a58f7a12-b23a-43fc-8a84-195636e9f7d4\",\n  \"dateStartRead\":\"2016-06-07T12:39:58.000Z\",\n  \"dateLastRead\":\"2016-06-07T12:40:10.195Z\",\n  \"playerPosition\":273,\n  \"playerAudio\":\"fra\",\n  \"playerCaption\":\"fr\",\n  \"rating\":null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/video/index.js",
    "groupTitle": "User_Videos"
  },
  {
    "type": "put",
    "url": "/api/users/:userId/videos/:videoId",
    "title": "Update User-Video Association",
    "name": "putUsersVideos",
    "description": "<p>this api call create/update the association data between a user and a video (audio language, caption language, rating, player position) this api is called on video start/end/seek, or every 60sec during play</p>",
    "group": "User_Videos",
    "parameter": {
      "fields": {
        "putData": [
          {
            "group": "putData",
            "type": "String",
            "optional": false,
            "field": "playerAudio",
            "description": "<p>(optionnal, ISO6392T 3 letters lowercase)</p>"
          },
          {
            "group": "putData",
            "type": "String",
            "optional": false,
            "field": "playerCaption",
            "description": "<p>(optionnal, ISO6392T 3 letters lowercase)</p>"
          },
          {
            "group": "putData",
            "type": "Integer",
            "optional": false,
            "field": "playerPosition",
            "description": "<p>(optionnal, position in &quot;seconds&quot;, auto-update dateLastRead if set)</p>"
          },
          {
            "group": "putData",
            "type": "Integer",
            "optional": false,
            "field": "rating",
            "description": "<p>(optionnal, rating, enum:{ 1, 2, 3, 4, 5 })</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (empty json) :",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/api/user/video/index.js",
    "groupTitle": "User_Videos"
  },
  {
    "type": "get",
    "url": "/api/videos/:id",
    "title": "Request Video information",
    "name": "GetVideo",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Video unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/x-www-form-urlencoded, application/json, application/xml).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "Location",
            "description": "<p>URI of created Thing.</p>"
          },
          {
            "group": "Success 201",
            "type": "text",
            "optional": false,
            "field": "body",
            "description": "<p>Thing id.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Video.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>Info of the Video.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetId",
            "description": "<p>AssetId Related.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "captionId",
            "description": "<p>CaptionId Related.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Active in production.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "401/Unauthorized.",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "text",
            "optional": false,
            "field": "403/Forbidden",
            "description": "<p>Required field [...] omitted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://legacy-api.afrostream.tv/api/users/4711",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://legacy-api.afrostream.tv/api/users/4711"
      }
    ],
    "version": "0.0.0",
    "filename": "server/app/api/video/index.js",
    "groupTitle": "Video"
  }
] });
