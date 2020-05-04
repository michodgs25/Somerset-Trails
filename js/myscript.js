$(document).ready(function() {
    
});
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementsByClassName('cheddar-map'), {
          center: {lat: 51.2880522, lng: -2.7575527},
          zoom: 8
        });
      }