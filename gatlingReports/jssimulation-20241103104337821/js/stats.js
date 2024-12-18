var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4400",
        "ok": "2200",
        "ko": "2200"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "92",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "7369",
        "ok": "7369",
        "ko": "7110"
    },
    "meanResponseTime": {
        "total": "893",
        "ok": "878",
        "ko": "907"
    },
    "standardDeviation": {
        "total": "953",
        "ok": "950",
        "ko": "956"
    },
    "percentiles1": {
        "total": "602",
        "ok": "555",
        "ko": "621"
    },
    "percentiles2": {
        "total": "1281",
        "ok": "1278",
        "ko": "1283"
    },
    "percentiles3": {
        "total": "2869",
        "ok": "2935",
        "ko": "2844"
    },
    "percentiles4": {
        "total": "4409",
        "ok": "4470",
        "ko": "4242"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1323,
    "percentage": 30.068181818181817
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 292,
    "percentage": 6.636363636363636
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 585,
    "percentage": 13.295454545454547
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2200,
    "percentage": 50.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.57",
        "ok": "39.29",
        "ko": "39.29"
    }
},
contents: {
"req_get-user-1983174261": {
        type: "REQUEST",
        name: "Get user",
path: "Get user",
pathFormatted: "req_get-user-1983174261",
stats: {
    "name": "Get user",
    "numberOfRequests": {
        "total": "2200",
        "ok": "2200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7369",
        "ok": "7369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "950",
        "ok": "950",
        "ko": "-"
    },
    "percentiles1": {
        "total": "555",
        "ok": "555",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1278",
        "ok": "1278",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2935",
        "ok": "2935",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4470",
        "ok": "4470",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1323,
    "percentage": 60.13636363636363
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 292,
    "percentage": 13.272727272727272
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 585,
    "percentage": 26.590909090909093
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.29",
        "ok": "39.29",
        "ko": "-"
    }
}
    },"req_get-user-redire--813652072": {
        type: "REQUEST",
        name: "Get user Redirect 1",
path: "Get user Redirect 1",
pathFormatted: "req_get-user-redire--813652072",
stats: {
    "name": "Get user Redirect 1",
    "numberOfRequests": {
        "total": "2200",
        "ok": "0",
        "ko": "2200"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "-",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "7110",
        "ok": "-",
        "ko": "7110"
    },
    "meanResponseTime": {
        "total": "907",
        "ok": "-",
        "ko": "907"
    },
    "standardDeviation": {
        "total": "956",
        "ok": "-",
        "ko": "956"
    },
    "percentiles1": {
        "total": "621",
        "ok": "-",
        "ko": "621"
    },
    "percentiles2": {
        "total": "1283",
        "ok": "-",
        "ko": "1283"
    },
    "percentiles3": {
        "total": "2844",
        "ok": "-",
        "ko": "2844"
    },
    "percentiles4": {
        "total": "4242",
        "ok": "-",
        "ko": "4242"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2200,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.29",
        "ok": "-",
        "ko": "39.29"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
