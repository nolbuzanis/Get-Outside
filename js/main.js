// Slide to show the map and results, hides the main page
function slide() {
    var map = document.getElementById('map');
    var page = document.getElementById('home');
    map.classList.toggle('active');
    home.classList.toggle('innactive');
    search.classList.toggle('innactive');
    back.classList.toggle('innactive');
}

// Check to see if value is valid, a number, and greater than 0
function distanceValidation() {
    var value = document.getElementById('distance').value;
    if (!value || isNaN(value)) {
        console.log('No distance specified.');
    } else if (value == 0){
        console.log('Specify a value greater than zero.');
    }
    else {
        slide();
        initMap();
        console.log(value + ' km entered');
    }
}

// When button is pressed, call distanceValidation function
document.getElementById('search').addEventListener('click', distanceValidation);

// Call distanceValidation function is enter key is pressed
document.getElementById('distance').addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        distanceValidation();
    }
});

document.getElementById('back').addEventListener('click', function() {
    slide();
});

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


