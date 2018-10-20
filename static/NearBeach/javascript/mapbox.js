function initMap(latitude,longitude,title) {



    mapboxgl.accessToken  = "{{ MAPBOX_API_TOKEN }}";
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        //center: [latitude,longitude], // starting position [lng, lat]
        center: [longitude,latitude],
        zoom: 15 // starting zoom
    });
    map.on('load', function() {
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            //"coordinates": [latitude,longitude]
                            "coordinates": [longitude,latitude]
                        },
                        "properties": {
                            "title": title,
                            "icon": "marker"
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        })

    });

    //Quickly, relayout the map before anyone knows
    //relayout_map();
    setTimeout(relayout_map, 500);
}

