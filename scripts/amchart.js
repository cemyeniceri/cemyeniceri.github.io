AmCharts.makeChart("map",{
    "type": "map",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "addClassNames": true,
    "fontSize": 15,
    "color": "#000000",
    "projection": "mercator",
    "backgroundAlpha": 1,
    "backgroundColor": "rgba(255,255,255,1)",
    "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true,
        "images": [
            {
                "top": 40,
                "left": 60,
                "width": 80,
                "height": 40,
                "pixelMapperLogo": false,
                "imageURL": "http://pixelmap.amcharts.com/static/img/logo-black.svg",
                "url": "http://www.amcharts.com"
            },
            {
                "selectable": true,
                "title": "Headquarter Office: London, UK",
                "longitude": -0.4965,
                "latitude": 53.0586,
                "svgPath": "M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123",
                "color": "rgba(43,108,220,0.8)",
                "scale": 1
            },
            {
                "selectable": true,
                "title": "Side Office: Istanbul",
                "longitude": 29.8392,
                "latitude": 41.6197,
                "svgPath": "M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123",
                "color": "rgba(43,108,220,0.8)",
                "scale": 1
            }
        ],
        "areas": [
            {
                "id": "GB",
                "title": "United Kingdom",
                "color": "rgba(75,216,181,0.8)"
            },
            {
                "id": "TR",
                "title": "Turkey",
                "color": "rgba(75,216,181,0.8)"
            }
        ]
    },
    "balloon": {
        "horizontalPadding": 15,
        "borderAlpha": 0,
        "borderThickness": 1,
        "verticalPadding": 15
    },
    "areasSettings": {
        "color": "rgba(129,129,129,1)",
        "outlineColor": "rgba(255,255,255,1)",
        "rollOverOutlineColor": "rgba(255,255,255,1)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true,
        "unlistedAreasAlpha": 0,
        "unlistedAreasOutlineAlpha": 0
    },
    "imagesSettings": {
        "alpha": 1,
        "color": "rgba(129,129,129,1)",
        "outlineAlpha": 0,
        "rollOverOutlineAlpha": 0,
        "outlineColor": "rgba(255,255,255,1)",
        "rollOverBrightness": 20,
        "selectedBrightness": 20,
        "selectable": true
    },
    "linesSettings": {
        "color": "rgba(129,129,129,1)",
        "selectable": true,
        "rollOverBrightness": 20,
        "selectedBrightness": 20
    },
    "zoomControl": {
        "zoomControlEnabled": true,
        "homeButtonEnabled": false,
        "panControlEnabled": false,
        "right": 38,
        "bottom": 30,
        "minZoomLevel": 0.25,
        "gridHeight": 100,
        "gridAlpha": 0.1,
        "gridBackgroundAlpha": 0,
        "gridColor": "#FFFFFF",
        "draggerAlpha": 1,
        "buttonCornerRadius": 2
    }
});