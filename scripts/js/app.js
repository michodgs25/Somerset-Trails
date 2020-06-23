/*please visit readme.md for code credits*/
/*declare& get navigation class, increase user accessibility*/
$(".topnav.response").removeClass("responsive").addClass("topnav");
$(".bottom-nav.response").removeClass("responsive").addClass("bottom-nav");
/*scroll to to top button, increase user accessibility*/
mybutton = document.getElementById("myBtn");
/*when user scrolls 10rem from top of page, show button*/
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//scroll to top*/
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; /*for chrome, firefox, IE and opera*/
}
/*slideshow function,styling& animation*/
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
    setTimeout(showSlides, 2000); /* Change image every 2 seconds*/
}
/*banner text, introduce viewer to page*/
$("h4").css({ "color": "white", "font-style": "italic", "text-align": "center" });
$("h4").on({
    mouseenter: function () {
        $(this).css("font-size", "3em", "z-index", "3");
    },
    mouseleave: function () {
        $(this).css("font-size", "2em", "z-index", "3");
    }
});
/*h2, visibility& interactivity*/
$("h2").css({ "text-align": "center", "padding": "0.5em" });
$("h2").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1em");
    }
});
/*icons interactivity*/
$("i").on({
    mouseenter: function () {
        $(this).css("font-size", "2em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1.5em");
    }
});
/*topnav interactivity*/
$("button", "top-nav").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1em");
    }
});
/*footer icons& text interactivity*/
$("span", "other-trails").css("padding", "0.111em", "padding-top", "1em");
$("span", "other-trails").on({
    mouseenter: function () {
        $(this).css("font-size", "0.8em");
    },
    mouseleave: function () {
        $(this).css("font-size", "1em");
    }
});
/*event-listener, smooth scroll*/
let passiveIfSupported = false;
try {
    window.addEventListener("test", null,
        Object.defineProperty(
            {},
            "passive",
            {
                get: function () { passiveIfSupported = { passive: false }; }
            }
        )
    );
} catch (err) { }
window.addEventListener("scroll", function (event) {
    /*if browser cannot use event.preventDefault();*/
}, passiveIfSupported);