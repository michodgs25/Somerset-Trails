# Somerset Trails 
### Explore the west country's best trails, one step at a time.

*Somerset is world famous for it's beautiful countryside and spectacular hill-top views with thousands of tourists flocking to visit the area every year. Somerset boasts trails such as the **Cheddar Gorge**, the **Weston Woods**, **Somerset Coastal path** and many more.*

![Trails image](https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/logo/README.png)

## Contents

* [UX](#UX)
* [User-Stories](#User-Stories)
 * [Strategy](#Strategy)
 * [Scope](#Scope)
* [Wire-Frames](#Wire-Frames)
 * [Feature-and-features-left-to-implement](#Features-and-features-left-to-implement)
 * [Technologies](#Technologies)
 * [Testing](#Testing)
 * [Version-control](#Version-control)
 * [Deployment](#Deployment)
 * [issues-and-bugs](#issues-and-bugs)
 * [Acknowledgements](#Acknowledgements)
-----

## UX

__Somerset Trails__ site was born from observing that current sites such as: https://www.somersetlive.co.uk/news/somerset-news/11-stunning-walking-routes-around-2431780, had far too many ads clogging up each page which made the experience visitting the site unappealing. The trails are such beautiful places to visit, the website is many people's first impression and can be discouraging to see advertisements for various companies plastered everywhere.

__Somerset Trails__ website offers a user **(see user stories below)** a visually impactful site through its application of a responsive slideshow on each trail and a Google maps feature enabling the user to toggle between satelite and terrain type to suit their own personal needs. 

* A primary design goal of this website is to be a responsive, so that users can easily explore different trails and learn more about each trail via images& google maps.

* The site should be easy to navigate, with navigation sections top, bottom and right-side cursor that takes the user back to the top.

* Map of each trail is to be clearly defined on each page, and easy to use the toggles: terrain and map view.

### User Stories
-----

*"As a local businessman whom lives in the area, websites that display Somerset trails are hard to look at with far too many adverts. I'd like the website to be beautiful to view like the trails, with little to no advertising."*

---

*"My name is Grant, I don't like websites that are too text heavy and I lose interest quickly because of this I would like the site to have lots of images and only have text where it is necessary as I feel images tell a greater story."*

---

*"Hey, my name is Jeremy a product owner for this site. I do not like when a site looks great on desktop but looks crowded& cluttered on a mobile device as I view alot of websites via my mobile so I would like the site to be pleasurable to view on mobile devices."*

---

*"Good afternoon, my name is Helen a code editor. I would like the website to be easy to navigate, as it's a pain having to scroll back to the top of each page every time I want to access a different part of a website."*

### Strategy 
-----

* Firstly I had to establish target audience, Somerset has popular holiday sites such as: Butlins, Haven sites, glamping& camping sites on the quantock hills, Kittisford& Barton and luxury cottages in the rolling hills. 
This shows that the countryside is a glamorous& viable getaway for many families so having a responsive& intuitive website can display these amazing trails and the location of them is very important.

* New locals to Somerset can also benefit as getting to know the area is an important part of settling in; a visually pleasing site would make a good impression and encourage user to explore the area further. And lastly there are many local people who have lived in Somerset for years and have never explored these trails; implementing a Google maps API raises awareness of these trails to those potential users.

### Scope
-----
The next problem to solve was that there was already a great website called: https://www.nationaltrail.co.uk/en_GB/ - so what could I offer that is different? 
Users that come to this site aren't looking for trails in Wales or the north of England, this sites scope is specifically aimed towards users who either are local or who are visitting the Somerset area for a period of time. 

So the next step was figuring out how to maximise the user experience and present the best of Somerset trails via images& google maps API.

## Wire-Frames

### Homepage

<details>
  <summary>Home page header wireframe</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/home-page/home-header.png" target="_blank" rel=""/>
</div>
  </details>
  
  <details>
  <summary>Home page body wireframe</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/home-page/home-body.png" target="_blank" rel=""/>
</div>
  </details>
  
  <details>
  <summary>Home page footer wireframe</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/home-page/home-footer.png"
         </div>
    </details>
  
  ### Results page
  
   <details>
  <summary>Results page header</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/results-page/results-header.png"
         </div>
    </details>
    
   <details>
  <summary>Results page body</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/results-page/results-page.png"
         </div>
    </details>
    
  <details>
  <summary>Results page footer</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/results-page/results-footer.png"
         </div>
    </details>
    
## Features and features left to implement

### Features

__Navigation bar__ 

* *The navigation bar for __homepage__ and each __trail result page__ contains a logo and two tabs: home and top trails.*

<details>
  <summary>Navigation& Navigation dropdown</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/home-nav-ss.jpg" target="_blank" rel=""/>
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/open-home-ss.jpg" target="_blank" rel=""/>
  </div>
  </details>
  
* *The home tab acts a tool for the user to access the homepage at any time.*

* *The top trails tab is a drop-down element, when the user hovers on the tab; a box drops down, providing every trail available to the user at a single click.*

__Slideshow__ 

* *The slideshow on the __homepage__ will have a picture of each trail accompanied with a caption& a button so the user can access that specific trail immediately.*

<details>
  <summary>Slideshow</summary>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/home-gallery-ss.jpg" target="_blank" rel=""/>
  </div>
  </details>

* *The slideshow on each __trail results page__ will be a series of images of that trail.*

__Google maps API__

* *The map on the __homepage__ will be a map of the somerset area with pointers on each individual trail locations.*

* *The __homepage map__ will have a terrain and distance(of trail) toggle buttons.*

* *The map on the __trail result page__ will be zoomed in on that particular trail displaying trail location.*

<details>
  <summary>Somerset Maps</summary>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/somerset-map-ss.jpg" 
     target="_blank" rel=""/>
  </div>
  </details>

__Explore tab__

* *An enlarge dropup button placed directly above the footer section, the dropup box is accessed by hovering the cursor over the button. The box contains the other trails links so the user can access the next trail with ease.

  <details>
  <summary>Bottom page navigation</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/button-ss.jpg"
         target="rel"/>
  <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/open-button-ss.jpg"
       target="rel"/>
</div>
    </details>

__Back to top of page__

* *A button placed on the right hand side of the page, user can click the button and will be taken back to the top of the respective page.*

<details>
  <summary>Scroll tab</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/scroll-top-ss.jpg"
         </div>
 </details>
  <br>
  
  __Footer Section__
  
  * *Footer section signals to the user that the page has ended and provides links to social media and also a link to a nationally recognised trails page which opens a new tab and the user can explore other trails that are available across the United Kingdom. The links are center horizontally, with a light orange background& styled green. Two social medias: Facebook and twitter which opens a new tab when clicked on that takes the user to either their facebook or login page if not signed in.  
  
  <details>
  <summary>Footer section</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/footer-ss.jpg"
  </div>
  </details>
  <br>

<details>
  <summary>Features left to implement</summary>
  <br>
(https://github.com/michodgs24/Somerset-Trails/issues/1#issue-612876703)
</details>

## Technologies

* Html, Css and Javascript language

* JQuery library - https://code.jquery.com/jquery-3.2.1.slim.min.js         

* Popper library - https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js

* Bootstrap - https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js

* W3.CSS - https://www.w3schools.com/w3css/4/w3.css

* Google Maps - https://developers.google.com/maps/documentation/javascript/examples

## Testing

### Testing - i.
Shared the link on google, internet explorer and yahoo to ensure the site looks and works as it should on different browers. 

### Testing - ii. 
Opened google developer tools and toggled the site between various devices, that include:

* iphone X
* Moto G4
* Pixel 2
* Pixel 2 XL
* iphone 5/SE
* iphone 6/7/8 & plus
* ipad and ipad pro

### Testing - iii.
Applied google developer tool lighthouse to analyse mobile performance:

<details>
  <summary>Lighthouse Results</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/lighthouse-ss.jpg"
         </div>
 </details>

Results discussed here: https://github.com/michodgs24/Somerset-Trails/issues/10#issue-634894703

### Testing - iiii.
Site was tested in safari, firefox and chrome. Site works as intended.

### Testing - iiiii.
Tested html and css code formatting with https://validator.w3.org/ - done by copying& pasting the code via direct input into the site text box. 

Tested the JavaScript code with https://jshint.com/ - done by copying& pasting the code via direct imput into the site text-area. 

## Deployment
* This site is hosted using GitHub pages, deployed directly from the master branch. 

* The deployed site will update automatically upon new commits to the master branch. 

* In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

* To run locally, you can clone this repository directly into the editor of your choice by entering git clone
https://github.com/michodgs24/Somerset-Trails into your terminal. 

* To cut ties with this GitHub repository, type git remote rm origin into the terminal.

* When the code is downloaded as a .zip it can be unzipped and runned by opening the unzipped folder and then execute index.html. 

* The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers. 
When executed the main screen will be shown and the options can be chosen.

## issues and bugs
* __Slideshow__ - https://github.com/michodgs24/Somerset-Trails/issues/9#issue-634880128
* __Banner__ -  https://github.com/michodgs24/Somerset-Trails/issues/8#issue-629929008

## Acknowledgements

* W3.CSS - https://www.w3schools.com/w3css/4/w3.css.

* Code institute - https://codeinstitute.net/

* Google Developers - https://developers.google.com/


## External Media 
All images were take from Google images advanced search with filter: free to use or share.
