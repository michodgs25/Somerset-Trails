/*navigation js*/

/*when user scrolls the page*/
window.onscroll = function() {myFunction()};

/*calling nav*/
var navbar = document.getElementByClassName("navbar");

/*nav position*/
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}