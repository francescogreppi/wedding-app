var map,
	marker,
	infowindow,
  directionsService,
  directionsDisplay,
  directionMap,
  areaMap,
  areaCoords;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.972870, lng: 9.196177},
    zoom: 10,
    scrollwheel: false
  });
  marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: {lat: 45.972870, lng: 9.196177},
    map: map,
    title: 'Discover Lake Como'
  });

  infowindow = new google.maps.InfoWindow({
    content: "<p><strong>Lenno</strong></p><p>Francesco's place</p>"
  });

  google.maps.event.addListener(marker, 'click', function() {
   infowindow.open(map,marker);
	});
	infowindow.open(map,marker);


  marker.setMap(map);
}

function initDirectionMap() {
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionMap = new google.maps.Map(document.getElementById('directionMap'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65},
    scrollwheel: false
  });
  areaMap = new google.maps.Map(document.getElementById('areaMap'), {
    zoom: 12,
    center: {lat: 45.997946, lng: 9.241292},
    scrollwheel: false
  });
  // Define the LatLng coordinates for the polygon's path.
  areaCoords = [
    {lat: 45.969225, lng: 9.174320},
    {lat: 45.965713, lng: 9.182238},
    {lat: 45.964377, lng: 9.203053},
    {lat: 45.980960, lng: 9.220876},
    {lat: 45.992770, lng: 9.242357},
    {lat: 46.023538, lng: 9.243642},
    {lat: 46.025591, lng: 9.230302},
    {lat: 46.016387, lng: 9.227453},
    {lat: 46.001007, lng: 9.235017},
    {lat: 45.989100, lng: 9.208181},
    {lat: 45.976680, lng: 9.185371},
    {lat: 45.972154, lng: 9.174889}
  ];
   // Construct the polygon.
  areaPerimeter = new google.maps.Polygon({
    paths: areaCoords,
    strokeColor: '#009ACD',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#009ACD',
    fillOpacity: 0.35
  });

  directionsDisplay.setMap(directionMap);
  areaPerimeter.setMap(areaMap);
  calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: {lat: 45.630115, lng: 8.726046},
    destination: {lat: 45.972870, lng: 9.196177},
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      directionsDisplay.setPanel(document.getElementById('dvPanel'));
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
