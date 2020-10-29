function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
        lat: 53.347627,
        lng: -6.266259
        }
    });

    var labels = "ABC"
    var locations = [
        { lat: 53.346540, lng: -6.259110 },
        { lat: 53.345620, lng: -6.259172 },
        { lat: 53.346615, lng: -6.267090 }
        ];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length]
    });
    });

new MarkerClusterer(map, markers, {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});

        }