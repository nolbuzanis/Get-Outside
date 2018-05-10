
function initMap() {
    var location = {
        lat: 43.6532, 
        lng: -79.3832
    };
    var options = {
        zoom: 10,
        center: location
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker1 = new google.maps.Marker({
        position: location, 
        map: map
    });
}
