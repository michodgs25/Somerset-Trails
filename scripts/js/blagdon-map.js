//credit to google developer documentation
var locations = [
	//code adapted from google developers
	["Blagdon Lake", 51.3348101, -2.7040838, 2],
];
var map;
//create map object
function initMap() {
	map = new google.maps.Map(document.getElementsByClassName("map-custom")[0], {
		center: {
			lat: 51.3348101,
			lng: -2.7040838
		},
		zoom: 9
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
