var userLocation;

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(userLocation);
        });
    } else {
        console.log("User location not avaliable");
    }
}

var wanlessPark = {
    lat: 43.7289649,
    lng: -79.3919565
};
var toronto = {
    lat: 43.6532,
    lng: -79.3832
};

function initMap() {
    
    // Map Options
    var options = {
        zoom: 15,
        center: (userLocation) ? userLocation : toronto,
        mapTypeId: 'terrain'
    };
    
    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    /*
    // Add marker
    var marker = new google.maps.Marker({
        position: location, 
        map: map,
        icon: ''
    });

    var infoWindow = new google.maps.InfoWindow({
        content: 'Currrent Location'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
        });*/

        function addMarker(coords) {
            var marker = new google.maps.Marker({
                position: coords, 
                map: map,
                icon: ''
            });
        }

        addMarker(userLocation);
}

