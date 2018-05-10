
function initMap() {
    var location = {
        lat: 43.6532, 
        lng: -79.3832
    };
    // Map Options
    var options = {
        zoom: 10,
        center: location,
        mapTypeId: 'terrain'
    };
    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);
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
    });
}
