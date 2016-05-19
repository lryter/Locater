// Initialize FW 7 app
var myApp = new Framework7();
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

function initMap()
{
	var latlng = new google.maps.LatLng(47.3709397, 8.5274632);
    var map = new google.maps.Map(document.getElementById('googleMap'), {
    center: latlng,
    zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({map: map});    
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              document.getElementById('id_coordinatesx').value = pos.lat;
              document.getElementById('id_coordinatesy').value = pos.lng;
              infoWindow.setPosition(pos);
              infoWindow.setContent('You are here.<br> ~' + position.coords.accuracy + 'meter');
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}