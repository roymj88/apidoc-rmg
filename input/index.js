/**
* @api {get} /get_filters.php Filter Values
* @apiName GetFilters
* @apiGroup Page3
* @apiSuccess {Array} channels Channel List
* @apiSuccess {Array} genre Genre List
* @apiSuccess {Array} tg TG List
* @apiSuccess {Array} metrics Metric List
* @apiSuccess {Array} markets Market List
* @apiExample {curl} Sample Input:
{}
* @apiExample {http} Sample Output:
{
    "channels": [
        {
            "id": "12",
            "name": "ANIMAL PLANET"
        },
        {
            "id": "36",
            "name": "DISCOVERY CHANNEL"
        },
        {
            "id": "120",
            "name": "DISCOVERY SCIENCE SCI"
        },
        {
            "id": "216",
            "name": "DISCOVERY TAMIL"
        },
        {
            "id": "121",
            "name": "DISCOVERY TURBO"
        },
        {
            "id": "45",
            "name": "HISTORY TV18"
        },
        {
            "id": "57",
            "name": "NATIONAL GEOGRAPHIC"
        },
        {
            "id": "242",
            "name": "Z KHANA KHAZANA"
        }
    ],
    "genre": [
        {
            "id": "4",
            "name": "ENG BUS NEWS"
        },
        {
            "id": "5",
            "name": "ENG GEC"
        },
        {
            "id": "9",
            "name": "ENG MOVIES"
        },
        {
            "id": "10",
            "name": "ENG NEWS"
        },
        {
            "id": "17",
            "name": "HIN BUS NEWS"
        },
        {
            "id": "14",
            "name": "HIN MOVIES"
        },
        {
            "id": "2",
            "name": "HIN NEWS"
        },
        {
            "id": "12",
            "name": "HINDI GEC"
        },
        {
            "id": "23",
            "name": "HINDI MUSIC"
        },
        {
            "id": "22",
            "name": "HINDI NEWS"
        },
        {
            "id": "6",
            "name": "INFOTAINMENT"
        },
        {
            "id": "18",
            "name": "KIDS"
        },
        {
            "id": "8",
            "name": "LIFESTYLE"
        },
        {
            "id": "13",
            "name": "MUSIC"
        },
        {
            "id": "24",
            "name": "MYTHOLOGICAL"
        },
        {
            "id": "21",
            "name": "NORTH EAST SAT"
        },
        {
            "id": "7",
            "name": "REG GEC"
        },
        {
            "id": "15",
            "name": "REG MOVIES"
        },
        {
            "id": "20",
            "name": "REG MUSIC"
        },
        {
            "id": "16",
            "name": "REG NEWS"
        },
        {
            "id": "11",
            "name": "SOUTH HD"
        },
        {
            "id": "1",
            "name": "SOUTH NEWS"
        },
        {
            "id": "3",
            "name": "SOUTH SAT"
        },
        {
            "id": "19",
            "name": "SPORTS"
        }
    ],
    "tg": [
        {
            "id": "1",
            "name": "AA 4+ C&S"
        },
        {
            "id": "2",
            "name": "ALL 4+ "
        },
        {
            "id": "3",
            "name": "M 15+ ABC C&S"
        }
    ],
    "metrics": [
        {
            "id": "1",
            "name": "GVM"
        },
        {
            "id": "2",
            "name": "Rat%"
        },
        {
            "id": "3",
            "name": "Shr%"
        }
    ],
    "markets": [
        {
            "id": "1",
            "name": "Andhra Pradesh"
        },
        {
            "id": "2",
            "name": "Gujarat"
        },
        {
            "id": "3",
            "name": "Karnataka"
        },
        {
            "id": "4",
            "name": "Maharashtra"
        },
        {
            "id": "5",
            "name": "Punjab"
        },
        {
            "id": "6",
            "name": "West Bengal"
        }
    ]
}
*/

/**
* @api {get} /get_weekly_summary Weekly Summary
* @apiName GetWeeklySummary
* @apiGroup Page3
* @apiParam {Numeric} markets Market selected.
* @apiParam {Numeric} channels Channel selected.
* @apiParam {Numeric} weeks Week selected.
* @apiParam {Array} tg TG selected.
* @apiSuccess {String} channel Channel Name
* @apiSuccess {String} gvm  Current GVM of the channel
* @apiSuccess {Array} gvm_last_4_weeks  GVM of the channel for the previous 4 weeks
* @apiExample {curl} Sample Input:
{
    "markets":1,
    "channels": 4,
    "weeks": [
        47,
        50
    ],
    "tg": 3
}
* @apiExample {http} Sample Output:
[
	{
		"channel": "<channel_name>",
		"gvm": "current_week_value",
		"gvm_last_4_weeks": [
		    71,
		    78,
		    39,
		    66
		],
		"rank": 296,
		"rank_last_4_weeks": [
		    68,
		    52,
		    80,
		    96
		],
		"ad_fct": 42,
		"ad_fct_last_4_weeks": [
		    3,
		    26,
		    -41,
		    -30
		]
	},
	{
		"channel": "<channel_name>",
		"gvm": "current_week_value",
		"gvm_last_4_weeks": [
		    71,
		    78,
		    39,
		    66
		],
		"rank": 296,
		"rank_last_4_weeks": [
		    68,
		    52,
		    80,
		    96
		],
		"ad_fct": 42,
		"ad_fct_last_4_weeks": [
		    3,
		    26,
		    -41,
		    -30
		]
	}
]
*/


/**
* @api {get} /get_marketwise_gvm_comparison Marketwise GVM Comparison
* @apiName GetMarketWiseGVMComparison
* @apiGroup Page3
* @apiParam {Array} channels Channels selected.
* @apiParam {Numeric} weeks Week selected.
* @apiParam {Numeric} tg TG selected.
* @apiSuccess {Array} markets Market Names
* @apiSuccess {Array} data  
* @apiExample {curl} Sample Input:
{
    "channels": [
        3,
        4
    ],
    "weeks":   50,
    "tg": 3
}
* @apiExample {http} Sample Output:
{
    markets: [
        'Market1',
        'Market2',
        'Market3'
    ],
    data: [
        {
            name: 'Channel 1',
            data: [
                -2.2,
                -2.2,
                -2.3
            ]
        },
        {
            name: 'Channel 2',
            data: [
                2.1,
                2.0,
                2.2
            ]
        }
    ]
}
*/



/**
* @api {get} /get_genre_performance Genre Performance - Graph
* @apiName GetGenrePerformance
* @apiGroup Page3
* @apiParam {Numeric} markets Market selected.
* @apiParam {Numeric} channels Channel selected.
* @apiParam {Array} weeks Weeks selected.
* @apiParam {Numeric} metrics Metric selected.
* @apiParam {Numeric} tg TG selected.
* @apiSuccess {Array} chartData Data for chart
* @apiSuccess {Array} adFctData Data for Ad FCT table
* @apiSuccess {Array} clientCountData Data for Client Count table
* @apiExample {curl} Sample Input:
{
    "markets": 5,
    "channels": 4,
    "weeks": [
        47,
        48,
        49,
        50,
        51,
        52
    ],
    "metrics": 4,
    "tg": 3
}
* @apiExample {http} Sample Output:
{

	chartData: [{
	    name: 'Channel 1',
	    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
	}, {
	    name: 'Channel 2',
	    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]
	}, {
	    name: 'Channel 3',
	    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]
	}, {
	    name: 'Channel 4',
	    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]
	}],

	adFctData:[{
	    name: 'Channel 1',
	    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
	}, {
	    name: 'Channel 2',
	    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]
	}, {
	    name: 'Channel 3',
	    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]
	}, {
	    name: 'Channel 4',
	    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]
	}],

	clientCountData:[{
	    name: 'Channel 1',
	    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
	}, {
	    name: 'Channel 2',
	    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]
	}, {
	    name: 'Channel 3',
	    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]
	}, {
	    name: 'Channel 4',
	    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]
	}]

}
*/





