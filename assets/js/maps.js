//create script tag

var script = document.createElement("script");
script.src = "http://maps.googleapis.com/maps/api/js?key=......&callback=initMap";
script.defer = true;
script.async = true;

//attach callback to window object
window.initMap = function() {

};

//append script to head

document.head.appendChild(script);

//Initialise home map, add lat& lng

var map;
function initMap() {
map = new google.maps.Map(document.getElementById("home-map"), {
    center: {lat: 50.986205, lng: -3.5072334},
    zoom: 18
});
}