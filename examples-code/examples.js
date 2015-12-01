$(document).ready(function() {
    kendo.bind($("#example"), {
        countries: [
            "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina", "Bulgaria",
            "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece",
            "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
            "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino",
            "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "United States",
            "Vatican City"
        ],
        multiSelectValue: [ "Finland", "Estonia" ],
        today: kendo.toString(new Date()),
        sharedDataSource: new kendo.data.DataSource({
            transport: {
                read: {
                    url: '/kendo-ui/content/web/datasource/internet-users.json',
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            },
            filter: [
                { field: "country", operator: "equals", value: "United States" },
                { field: "year", operator: "greaterThanEqual", value: 2000 }
            ],
            schema: {
                model: {
                    fields: {
                        year: {
                            type: "number"
                        },
                        value: {
                            type: "string"
                        }
                    }
                }
            }
        })
    });

    var serviceBaseUrl = "http://demos.telerik.com/kendo-ui/service";
    $("#scheduler").kendoScheduler({
        date: new Date("2013/6/13"),
        startTime: new Date("2013/6/13 07:00 AM"),
        endTime: new Date("2013/6/13 08:00 PM"),
        views: [
            { type: "day", selected: true },
            "week",
            "month"
        ],
        editable: false,
        timezone: "Etc/UTC",
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: serviceBaseUrl + "/meetings",
                    dataType: "jsonp"
                },
                update: {
                    url: serviceBaseUrl + "/meetings/update",
                    dataType: "jsonp"
                },
                create: {
                    url: serviceBaseUrl + "/meetings/create",
                    dataType: "jsonp"
                },
                destroy: {
                    url: serviceBaseUrl + "/meetings/destroy",
                    dataType: "jsonp"
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                }
            },
            schema: {
                model: {
                    id: "meetingID",
                    fields: {
                        meetingID: { from: "MeetingID", type: "number" },
                        title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                        start: { type: "date", from: "Start" },
                        end: { type: "date", from: "End" },
                        startTimezone: { from: "StartTimezone" },
                        endTimezone: { from: "EndTimezone" },
                        description: { from: "Description" },
                        recurrenceId: { from: "RecurrenceID" },
                        recurrenceRule: { from: "RecurrenceRule" },
                        recurrenceException: { from: "RecurrenceException" },
                        roomId: { from: "RoomID", nullable: true },
                        atendees: { from: "Atendees", nullable: true },
                        isAllDay: { type: "boolean", from: "IsAllDay" }
                    }
                }
            }
        }
    });

    var notification = $("#notification").kendoNotification({
        autoHideAfter: 0,
        hideOnClick: false,
        appendTo: "#notification"
    }).data("kendoNotification");

    notification.info("information");
    notification.success("success");
    notification.warning("warning");
    notification.error("error");
});

function initialize() {
    $("#area-chart").kendoChart({
        transitions: false,
        title: {
            text: "Internet Users"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area"
        },
        series: [
            {
                name: "United States",
                data: [67.96, 68.93, 75, 74, 78]
            }, {
                name: "World",
                data: [15.7, 16.7, 20, 23.5, 26.6]
            }
        ],
        valueAxis: {
            labels: {
                format: "{0}%"
            }
        },
        categoryAxis: {
            categories: [2005, 2006, 2007, 2008, 2009]
        },
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });

    $("#mixed-chart").kendoChart({
        transitions: false,
        title: {
            text: "Hybrid car mileage report"
        },
        legend: {
            position: "bottom"
        },
        series: [{
            type: "column",
            data: [20, 40, 45, 30, 50],
            stack: true,
            name: "on battery"
        }, {
            type: "column",
            data: [20, 30, 35, 35, 40],
            stack: true,
            name: "on gas"
        }, {
            type: "line",
            data: [7.8, 6.2, 5.9, 7.4, 5.6],
            name: "l/100 km",
            axis: "l100km"
        }],
        valueAxes: [{
            title: { text: "miles" },
            min: 0,
            max: 100
        }, {
            name: "l100km",
            title: { text: "liters per 100km" }
        }],
        categoryAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            axisCrossingValues: [0, 10]
        }
    });


    $("#bubble-chart").kendoChart({
        transitions: false,
        title: {
            text: "Crime statistics"
        },
        legend: {
            visible: false
        },
        dataSource: {
            transport: {
                read: {
                    url: '/kendo-ui/content/dataviz/js/crime-stats.json',
                    dataType: "json"
                }
            }
        },
        series: [{
            type: "bubble",
            xField: "murder",
            yField: "burglary",
            sizeField: "population",
            categoryField: "state"
        }],
        xAxis: {
            labels: {
                format: "{0:N0}"
            },
            title: {
                text: "Murders per 100,000 population"
            }
        },
        yAxis: {
            labels: {
                format: "{0:N0}"
            },
            title: {
                text: "Burglaries per 100,000 population"
            }
        },
        tooltip: {
            visible: true,
            format: "{3}: Population {2:N0}"
        }
    });

    $("#pie-chart").kendoChart({
        transitions: false,
        title: {
            text: "Break-up of Spain Electricity Production for 2008"
        },
        legend: {
            position: "bottom",
            labels: {
                template: "#= text # (#= value #%)"
            }
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent"
            }
        },
        series: [{
            type: "pie",
            data: [{
                category: "Hydro",
                value: 22
            }, {
                category: "Solar",
                value: 2
            }, {
                category: "Nuclear",
                value: 49
            }, {
                category: "Wind",
                value: 27
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });

    $("#linear-gauge").kendoLinearGauge({
        transitions: false,
        pointer: {
            value: 30
        }
    });

    $("#radial-gauge").kendoRadialGauge({
        transitions: false,
        pointer: {
            value: 40
        },
        scale: {
            max: 180,
            ranges: [
                { from: 160, to: 180, color: "#ff0000" }
            ]
        }
    });
}

$(document).ready(initialize);
$("#example").bind("kendo:skinChange", initialize);
