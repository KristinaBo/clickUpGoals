var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "500",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "89",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "1669",
        "ok": "1331",
        "ko": "1669"
    },
    "meanResponseTime": {
        "total": "188",
        "ok": "198",
        "ko": "178"
    },
    "standardDeviation": {
        "total": "196",
        "ok": "157",
        "ko": "229"
    },
    "percentiles1": {
        "total": "107",
        "ok": "117",
        "ko": "94"
    },
    "percentiles2": {
        "total": "286",
        "ok": "323",
        "ko": "114"
    },
    "percentiles3": {
        "total": "420",
        "ok": "395",
        "ko": "520"
    },
    "percentiles4": {
        "total": "1230",
        "ok": "888",
        "ko": "1339"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 493,
    "percentage": 49.3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0.4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 0.3
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 500,
    "percentage": 50.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.74",
        "ok": "10.87",
        "ko": "10.87"
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1331",
        "ok": "1331",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles2": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "percentiles4": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 493,
    "percentage": 98.6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0.8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 0.6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.87",
        "ok": "10.87",
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
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "-",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "1669",
        "ok": "-",
        "ko": "1669"
    },
    "meanResponseTime": {
        "total": "178",
        "ok": "-",
        "ko": "178"
    },
    "standardDeviation": {
        "total": "229",
        "ok": "-",
        "ko": "229"
    },
    "percentiles1": {
        "total": "94",
        "ok": "-",
        "ko": "94"
    },
    "percentiles2": {
        "total": "114",
        "ok": "-",
        "ko": "114"
    },
    "percentiles3": {
        "total": "520",
        "ok": "-",
        "ko": "520"
    },
    "percentiles4": {
        "total": "1339",
        "ok": "-",
        "ko": "1339"
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
    "count": 500,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.87",
        "ok": "-",
        "ko": "10.87"
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
