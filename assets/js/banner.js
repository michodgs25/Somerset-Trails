const banner = document.querySelector(".banner");
const topnav = document.querySelector(".topnav");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(banner,1, {height: "0%"}, {height: "80%"});