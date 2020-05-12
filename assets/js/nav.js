const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function myFunction() {
  var x = document.getElementsByClassName("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}