/*Initial setup of js maps*/
/*code adapted from site-point - https://www.sitepoint.com/google-maps-javascript-api-the-right-way/*/
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".map-custom").length > 0)
  {
    if (document.querySelector("html").lang)
      lang = document.querySelector("html").lang;
    else
      lang = "en";

      var js_file = document.createElement("script");
    js_file.type = "text/javascript";
    js_file.src = "https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=" + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});