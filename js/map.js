document.getElementById('back').addEventListener('click', function() {
  window.location.href = '/index.html';
  console.log('button pressed');
});

function initMap() {

  var user = {
    name: 'Current Location',
    geometry: {
      location: {}
    }
  };

    var userLocation = JSON.parse(window.localStorage.getItem('GPS'));

    user.geometry.location = new google.maps.LatLng(userLocation.lat, userLocation.lng);

    var distanceSpecified = (window.localStorage.getItem('radius')) ? JSON.parse(window.localStorage.getItem('radius')) : 10;

    // Default if there is an error in finding the user's location
    var kingston = {
      lat: 44.229898,
      lng: -76.494751
  };

    // Map Options
    var options = {
        zoom: 13,
        center: (userLocation) ? userLocation : kingston,
        mapTypeId: 'terrain'
    };
    
    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);

        function addMarker(target) {
            var marker = new google.maps.Marker({
                position: target.geometry.location, 
                map: map,
                icon: ''
            });

            var infoWindow = new google.maps.InfoWindow({
                content: target.name
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
                });
        }

        addMarker(user);
        
        var request = {
            location: user.geometry.location,
            radius: 1000 * distanceSpecified,
            type: ['']
        }
        
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    var place = results[i];
                    //console.log(results[i]);
                   addMarker(results[i]);
                }
            }
        }

        
}