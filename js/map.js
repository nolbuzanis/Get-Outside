document.getElementById('back').addEventListener('click', function() {
  console.log('button pressed');
});

function initMap() {

    var userLocation = JSON.parse(window.localStorage.getItem('GPS'));
    console.log(userLocation);
    var user = new google.maps.LatLng(userLocation.lat, userLocation.lng);
    console.log(user);

    // Map Options
    var options = {
        zoom: 15,
        center: (user) ? user : kingston,
        mapTypeId: 'terrain'
    };
    
    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);

        function addMarker(coords) {
            var marker = new google.maps.Marker({
                position: coords, 
                map: map,
                icon: ''
            });

            var infoWindow = new google.maps.InfoWindow({
                content: 'Enter Data'
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
                });
        }

        addMarker(userLocation);
        /*
        var request = {
            location: user,
            radius: 1000 * distanceSpecified,
            type: ['']
        }
        
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log(results[i].lat);
                   addMarker(results[i].geometry.location);

                }
            }
        }

        */
}