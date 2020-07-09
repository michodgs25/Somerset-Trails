//please visit readme.md for code credits
$(".topnav.response").removeClass("responsive").addClass("topnav");
//declare& get navigation class, increase user accessibility
$(".bottom-nav.response").removeClass("responsive").addClass("bottom-nav");
//scroll to to top button, increase user accessibility
mybutton = document.getElementById("myBtn");
//when user scrolls 10rem from top of page, show button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; //for chrome, firefox, IE and opera
}
//slideshow function,styling& animation
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//active dot changes with each slide
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); //Change image every 2 seconds
}
//banner text, introduce viewer to page
$("h4").css({ "color": "white", "font-style": "italic", "text-align": "center" });
$("h4").on({
    mouseenter: function () {
        $(this).css("font-size", "2.5em", "z-index", "3");
    },
    mouseleave: function () {
        $(this).css("font-size", "2em", "z-index", "3");
    }
});
//h2, visibility& interactivity
$("h2").css({ "text-align": "center", "padding": "0.5em" });
$("h2").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1em");
    }
});
//icons interactivity
$("i").on({
    mouseenter: function () {
        $(this).css("font-size", "2em");
    },
    mouseleave: function () {
        $(this).css("font-size", "2em");
    }
});
//topnav interactivity
$("button", "top-nav").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1em");
    }
});

//homepage map
//create locations object
var locations = [
    //code adapted from google developers documentation
    ["Exmoor National Park", 51.040565, -3.5551257, 4],
    ["Somerset Coastal Path", 51.2072165, -3.4641482, 5],
    ["Staple Hill", 50.9445268, -3.0913381, 3],
    ["Blagdon Lake", 51.3348101, -2.7040838, 2],
    ["Cheddar Gorge", 51.2863881, -2.7690326, 1]
];
var map;
//create map object
function initMap() {
    map = new google.maps.Map(document.getElementsByClassName("map-custom")[0], {
        center: { lat: 51.180000, lng: -3.000000 },
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