//credit to google developer documentation
var locations = [
    //code adapted from google developers
    ["Somerset Coastal Path", 51.2072165, -3.4641482, 5],
];

var map;
//create map object
function initMap() {
    map = new google.maps.Map(document.getElementsByClassName("map-custom")[0], {
        center: { lat: 51.180000, lng: -3.000000 },
        zoom: 8
    });

    //call map window& create marker variable
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        //add event listener, set markers to locations
        google.maps.event.addListener(marker, "click", (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }
}