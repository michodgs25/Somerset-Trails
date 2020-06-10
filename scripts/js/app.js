/*declare& get navigation class, increase user accessibility*/
function dropDownNavigation() {
    var x = document.getElementsByClassName("topnav");/*top navigation*/
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function dropUpNavigation() {
    var x = document.getElementsByClassName("bottom-nav");/*bottom navigation*/
    if (x.className === "bottom-nav") {
        x.className += " responsive";
    } else {
        x.className = "bottom-nav";
    }
}
/*end of navigation code*/

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

//when user clicks, scroll to top of document*/
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; /*for chrome, firefox, IE and opera*/
}
/*End of scroll code*/

/*slideshow function,styling& animation, ensure slideshow is appealing and works effectively*/
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
/*end of slideshow code*/

/*banner text, introduce viewer to page and increase interactivity*/
$("h4").css({ "color": "white", "font-style": "italic", "text-align": "center" });

$("h4").on({
    mouseenter: function () {
        $(this).css("font-size", "3rem", "z-index", "3");
    },
    mouseleave: function () {
        $(this).css("font-size", "1.2rem", "z-index", "3");
    }
});
/*end of banner text*/

/*h2 headings, increase visibility& interactivity*/
$("h2").css({ "text-align": "center", "padding-top": "1rem" });

$("h2").on({
    mouseenter: function () {
        $(this).css("font-size", "2rem");
    },
    mouseleave: function () {
        $(this).css("font-size", "1rem");
    }
});
/*end of h2 code*/

/*achor tags, increase interactivity*/
$("a").on({
    mouseenter: function () {
        $(this).css("font-size", "1.2rem");
    },
    mouseleave: function () {
        $(this).css("font-size", "1rem");
    }
});
/*end of achor tags code*/

/*button elements, increase button interactivity*/
$("button").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5rem");
    },
    mouseleave: function () {
        $(this).css("font-size", "2rem");
    }
});
/*end of button element*/

/*footer icons& text, increase footer interactivity*/
$("span").css("padding", "0.5rem");

$("span").on({
    mouseenter: function () {
        $(this).css("font-size", "1.5rem");
    },
    mouseleave: function () {
        $(this).css("font-size", "2rem");
    }
});
/*end of footer comment*/

/*scroll event-listener, ensure smooth scroll on mobile devices*/
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
    /*do something*/
    /*if browser cannot use event.preventDefault();*/
}, passiveIfSupported);