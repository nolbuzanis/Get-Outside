var distanceSpecified;
var userLocation;

//window.localStorage = getUserLocation();

// Check to see if value is valid, a number, and greater than 0
function distanceValidation() {
    var value = document.getElementById('distance').value;
    if (!value || isNaN(value)) {
        console.log('No distance specified.');
    } else if (value == 0){
        console.log('Specify a value greater than zero.');
    }
    else {
        if (userLocation) {
            window.location.href = '/map.html';
            window.localStorage.setItem('radius', JSON.stringify(value));
        } 
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

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            window.localStorage.setItem('GPS', JSON.stringify(userLocation));
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

