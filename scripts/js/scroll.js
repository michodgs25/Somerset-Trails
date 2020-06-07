//get button
mybutton = document.getElementById("myBtn");

//when user scrolls 10rem from top of page, show button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display ="none";
    }
}

//when user clicks, scroll to top of document

function topFunction () {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //for chrome, firefox, IE and opera
}