define({ "api": [
  {
    "type": "get",
    "url": "/get_filters.php",
    "title": "Filter Values",
    "name": "GetFilters",
    "group": "Page3",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "channels",
            "description": "<p>Channel List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "genre",
            "description": "<p>Genre List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tg",
            "description": "<p>TG List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "metrics",
            "description": "<p>Metric List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "markets",
            "description": "<p>Market List</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample Input:",
        "content": "{}",
        "type": "curl"
      },
      {
        "title": "Sample Output:",
        "content": "{\n    \"channels\": [\n        {\n            \"id\": \"12\",\n            \"name\": \"ANIMAL PLANET\"\n        },\n        {\n            \"id\": \"36\",\n            \"name\": \"DISCOVERY CHANNEL\"\n        },\n        {\n            \"id\": \"120\",\n            \"name\": \"DISCOVERY SCIENCE SCI\"\n        },\n        {\n            \"id\": \"216\",\n            \"name\": \"DISCOVERY TAMIL\"\n        },\n        {\n            \"id\": \"121\",\n            \"name\": \"DISCOVERY TURBO\"\n        },\n        {\n            \"id\": \"45\",\n            \"name\": \"HISTORY TV18\"\n        },\n        {\n            \"id\": \"57\",\n            \"name\": \"NATIONAL GEOGRAPHIC\"\n        },\n        {\n            \"id\": \"242\",\n            \"name\": \"Z KHANA KHAZANA\"\n        }\n    ],\n    \"genre\": [\n        {\n            \"id\": \"4\",\n            \"name\": \"ENG BUS NEWS\"\n        },\n        {\n            \"id\": \"5\",\n            \"name\": \"ENG GEC\"\n        },\n        {\n            \"id\": \"9\",\n            \"name\": \"ENG MOVIES\"\n        },\n        {\n            \"id\": \"10\",\n            \"name\": \"ENG NEWS\"\n        },\n        {\n            \"id\": \"17\",\n            \"name\": \"HIN BUS NEWS\"\n        },\n        {\n            \"id\": \"14\",\n            \"name\": \"HIN MOVIES\"\n        },\n        {\n            \"id\": \"2\",\n            \"name\": \"HIN NEWS\"\n        },\n        {\n            \"id\": \"12\",\n            \"name\": \"HINDI GEC\"\n        },\n        {\n            \"id\": \"23\",\n            \"name\": \"HINDI MUSIC\"\n        },\n        {\n            \"id\": \"22\",\n            \"name\": \"HINDI NEWS\"\n        },\n        {\n            \"id\": \"6\",\n            \"name\": \"INFOTAINMENT\"\n        },\n        {\n            \"id\": \"18\",\n            \"name\": \"KIDS\"\n        },\n        {\n            \"id\": \"8\",\n            \"name\": \"LIFESTYLE\"\n        },\n        {\n            \"id\": \"13\",\n            \"name\": \"MUSIC\"\n        },\n        {\n            \"id\": \"24\",\n            \"name\": \"MYTHOLOGICAL\"\n        },\n        {\n            \"id\": \"21\",\n            \"name\": \"NORTH EAST SAT\"\n        },\n        {\n            \"id\": \"7\",\n            \"name\": \"REG GEC\"\n        },\n        {\n            \"id\": \"15\",\n            \"name\": \"REG MOVIES\"\n        },\n        {\n            \"id\": \"20\",\n            \"name\": \"REG MUSIC\"\n        },\n        {\n            \"id\": \"16\",\n            \"name\": \"REG NEWS\"\n        },\n        {\n            \"id\": \"11\",\n            \"name\": \"SOUTH HD\"\n        },\n        {\n            \"id\": \"1\",\n            \"name\": \"SOUTH NEWS\"\n        },\n        {\n            \"id\": \"3\",\n            \"name\": \"SOUTH SAT\"\n        },\n        {\n            \"id\": \"19\",\n            \"name\": \"SPORTS\"\n        }\n    ],\n    \"tg\": [\n        {\n            \"id\": \"1\",\n            \"name\": \"AA 4+ C&S\"\n        },\n        {\n            \"id\": \"2\",\n            \"name\": \"ALL 4+ \"\n        },\n        {\n            \"id\": \"3\",\n            \"name\": \"M 15+ ABC C&S\"\n        }\n    ],\n    \"metrics\": [\n        {\n            \"id\": \"1\",\n            \"name\": \"GVM\"\n        },\n        {\n            \"id\": \"2\",\n            \"name\": \"Rat%\"\n        },\n        {\n            \"id\": \"3\",\n            \"name\": \"Shr%\"\n        }\n    ],\n    \"markets\": [\n        {\n            \"id\": \"1\",\n            \"name\": \"Andhra Pradesh\"\n        },\n        {\n            \"id\": \"2\",\n            \"name\": \"Gujarat\"\n        },\n        {\n            \"id\": \"3\",\n            \"name\": \"Karnataka\"\n        },\n        {\n            \"id\": \"4\",\n            \"name\": \"Maharashtra\"\n        },\n        {\n            \"id\": \"5\",\n            \"name\": \"Punjab\"\n        },\n        {\n            \"id\": \"6\",\n            \"name\": \"West Bengal\"\n        }\n    ]\n}",
        "type": "http"
      }
    ],
    "version": "0.0.0",
    "filename": "input/index.js",
    "groupTitle": "Page3"
  },
  {
    "type": "get",
    "url": "/get_genre_performance",
    "title": "Genre Performance - Graph",
    "name": "GetGenrePerformance",
    "group": "Page3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "markets",
            "description": "<p>Market selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "channels",
            "description": "<p>Channel selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "weeks",
            "description": "<p>Weeks selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "metrics",
            "description": "<p>Metric selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "tg",
            "description": "<p>TG selected.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "chartData",
            "description": "<p>Data for chart</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "adFctData",
            "description": "<p>Data for Ad FCT table</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "clientCountData",
            "description": "<p>Data for Client Count table</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample Input:",
        "content": "{\n    \"markets\": 5,\n    \"channels\": 4,\n    \"weeks\": [\n        47,\n        48,\n        49,\n        50,\n        51,\n        52\n    ],\n    \"metrics\": 4,\n    \"tg\": 3\n}",
        "type": "curl"
      },
      {
        "title": "Sample Output:",
        "content": "{\n\n\tchartData: [{\n\t    name: 'Channel 1',\n\t    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]\n\t}, {\n\t    name: 'Channel 2',\n\t    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]\n\t}, {\n\t    name: 'Channel 3',\n\t    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]\n\t}, {\n\t    name: 'Channel 4',\n\t    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]\n\t}],\n\n\tadFctData:[{\n\t    name: 'Channel 1',\n\t    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]\n\t}, {\n\t    name: 'Channel 2',\n\t    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]\n\t}, {\n\t    name: 'Channel 3',\n\t    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]\n\t}, {\n\t    name: 'Channel 4',\n\t    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]\n\t}],\n\n\tclientCountData:[{\n\t    name: 'Channel 1',\n\t    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]\n\t}, {\n\t    name: 'Channel 2',\n\t    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]\n\t}, {\n\t    name: 'Channel 3',\n\t    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]\n\t}, {\n\t    name: 'Channel 4',\n\t    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]\n\t}]\n\n}",
        "type": "http"
      }
    ],
    "version": "0.0.0",
    "filename": "input/index.js",
    "groupTitle": "Page3"
  },
  {
    "type": "get",
    "url": "/get_marketwise_gvm_comparison",
    "title": "Marketwise GVM Comparison",
    "name": "GetMarketWiseGVMComparison",
    "group": "Page3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "channels",
            "description": "<p>Channels selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "weeks",
            "description": "<p>Week selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "tg",
            "description": "<p>TG selected.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "markets",
            "description": "<p>Market Names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample Input:",
        "content": "{\n    \"channels\": [\n        3,\n        4\n    ],\n    \"weeks\":   50,\n    \"tg\": 3\n}",
        "type": "curl"
      },
      {
        "title": "Sample Output:",
        "content": "{\n    markets: [\n        'Market1',\n        'Market2',\n        'Market3'\n    ],\n    data: [\n        {\n            name: 'Channel 1',\n            data: [\n                -2.2,\n                -2.2,\n                -2.3\n            ]\n        },\n        {\n            name: 'Channel 2',\n            data: [\n                2.1,\n                2.0,\n                2.2\n            ]\n        }\n    ]\n}",
        "type": "http"
      }
    ],
    "version": "0.0.0",
    "filename": "input/index.js",
    "groupTitle": "Page3"
  },
  {
    "type": "get",
    "url": "/get_weekly_summary",
    "title": "Weekly Summary",
    "name": "GetWeeklySummary",
    "group": "Page3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "markets",
            "description": "<p>Market selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "channels",
            "description": "<p>Channel selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Numeric</p> ",
            "optional": false,
            "field": "weeks",
            "description": "<p>Week selected.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tg",
            "description": "<p>TG selected.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>Channel Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "gvm",
            "description": "<p>Current GVM of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "gvm_last_4_weeks",
            "description": "<p>GVM of the channel for the previous 4 weeks</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample Input:",
        "content": "{\n    \"markets\":1,\n    \"channels\": 4,\n    \"weeks\": [\n        47,\n        50\n    ],\n    \"tg\": 3\n}",
        "type": "curl"
      },
      {
        "title": "Sample Output:",
        "content": "[\n\t{\n\t\t\"channel\": \"<channel_name>\",\n\t\t\"gvm\": \"current_week_value\",\n\t\t\"gvm_last_4_weeks\": [\n\t\t    71,\n\t\t    78,\n\t\t    39,\n\t\t    66\n\t\t],\n\t\t\"rank\": 296,\n\t\t\"rank_last_4_weeks\": [\n\t\t    68,\n\t\t    52,\n\t\t    80,\n\t\t    96\n\t\t],\n\t\t\"ad_fct\": 42,\n\t\t\"ad_fct_last_4_weeks\": [\n\t\t    3,\n\t\t    26,\n\t\t    -41,\n\t\t    -30\n\t\t]\n\t},\n\t{\n\t\t\"channel\": \"<channel_name>\",\n\t\t\"gvm\": \"current_week_value\",\n\t\t\"gvm_last_4_weeks\": [\n\t\t    71,\n\t\t    78,\n\t\t    39,\n\t\t    66\n\t\t],\n\t\t\"rank\": 296,\n\t\t\"rank_last_4_weeks\": [\n\t\t    68,\n\t\t    52,\n\t\t    80,\n\t\t    96\n\t\t],\n\t\t\"ad_fct\": 42,\n\t\t\"ad_fct_last_4_weeks\": [\n\t\t    3,\n\t\t    26,\n\t\t    -41,\n\t\t    -30\n\t\t]\n\t}\n]",
        "type": "http"
      }
    ],
    "version": "0.0.0",
    "filename": "input/index.js",
    "groupTitle": "Page3"
  }
] });