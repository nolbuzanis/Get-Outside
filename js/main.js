var distanceSpecified;

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
        distanceSpecified = value;
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

var kingston = {
    lat: 44.229898,
    lng: -76.494751
};


function initMap() {
    
    // Map Options
    var options = {
        zoom: 15,
        center: (userLocation) ? userLocation : kingston,
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

        var request = {
            location: userLocation,
            radius: 1000 * distanceSpecified,
            type: ['restaurant']
        }

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    var place = results[i];
                    addMarker(place.geometry.location);

                }
            }
        }

        
}