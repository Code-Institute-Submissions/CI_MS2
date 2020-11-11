function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: {
        lat: 53.347627,
        lng: -6.266259
        }
    });

    var locations = [
        { lat: 53.346540, lng: -6.259110, locationInfo: "info about 1st restaurant" },
        { lat: 53.345620, lng: -6.259172, locationInfo: "info about 2nd restaurant" },
        { lat: 53.346615, lng: -6.267090, locationInfo: "info about 3rd restaurant" },
        { lat: 53.330079, lng: -6.268894, locationInfo: "info about 4th restaurant" }
        ];

        var markers = locations.map(function(location, _i) {
            const infowindow = new google.maps.InfoWindow({
                content: location.locationInfo,
            });
            let marker = new google.maps.Marker({
                position: location,
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
            return marker;
            });

new MarkerClusterer(map, markers, {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});

infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Find your location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);

}