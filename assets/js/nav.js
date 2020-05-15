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

function myFunction() {
  var x = document.getElementsByClassName("bottom-nav");
  if (x.className === "bottom-nav") {
    x.className += " responsive";
  } else {
    x.className = "bottom-nav";
  }
}