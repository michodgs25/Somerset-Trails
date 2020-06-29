# Somerset Trails 
### Explore the west country's best trails, one step at a time.

*Somerset is world famous for it's beautiful countryside and spectacular hill-top views with thousands of tourists flocking to visit the area every year. Somerset boasts trails such as the **Cheddar Gorge**, the **Exmoor national park**, **Somerset Coastal path** and many more.*

![Trails image](https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/logo/README.png)

#### Live website here: https://michodgs24.github.io/Somerset-Trails/

  - Navigation feature demo: https://www.youtube.com/watch?v=rh5Chjdkfms

  - Slideshow feature demo: *https://www.youtube.com/watch?v=HrrLd142sC8*

  - Google Maps feature demo: https://www.youtube.com/watch?v=56QKj-ul_iI

  - Bottom navigation feature demo: https://www.youtube.com/watch?v=bKr4JHP7VkE

  - Scroll to top feature demo: https://www.youtube.com/watch?v=Lu2wbj7Zdi8

  - Footer feature demo: https://www.youtube.com/watch?v=M-4EeGWfsxI

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
 * [Project-barriers-and-the-solutions](#Project-barriers-and-the-solutions)
 * [issues-and-bugs](#issues-and-bugs)
 * [Acknowledgements](#Acknowledgements)
-----

## UX

__Somerset Trails__ site was born from observing that current sites such as: https://www.somersetlive.co.uk/news/somerset-news/11-stunning-walking-routes-around-2431780, had far too many ads clogging up each page which made the experience visitting the site unappealing. The trails are such beautiful places to visit, the website is many people's first impression and can be discouraging to see advertisements for various companies plastered everywhere.

__Somerset Trails__ website offers a user **(see user stories below)** a visually impactful experience through its application of a responsive slideshow on each trail and a Google maps feature enabling the user to toggle between satelite, terrain type and even go street view to visit each trail virtually.

* A primary design goal of this website is to be easy to navigate, so users can explore each different trail and learn more about each trail via images& google maps seamlessly.

* The site should be clean with matching color contrast that set the focus on the content itself.

* Map of each trail is to be clearly defined on each page, and easy to use the toggles: terrain and map view.

### User Stories
-----

*"As a local businessman whom lives in the area, websites that display Somerset trails are hard to look at with far too many adverts. I'd like the website to be beautiful to view like the trails, with little to no advertising."*

  - Solution to meet user expectation: no advertisement were used on this website, the full focus is the trails themselves.

---

*"My name is Grant, I don't like websites that are too text heavy and I lose interest quickly because of this I would like the site to have lots of images and only have text where it is necessary as I feel images tell a greater story."*

  - Solution: The only texts used were headings and universally known icons applied such as home or Facebook. In addition a slideshow on each page displaying different images.

---

*"Hey, my name is Jeremy a product owner for this site. I do not like when a site looks great on desktop but looks crowded& cluttered on a mobile device as I view alot of websites via my mobile so I would like the site to be pleasurable to view on mobile devices."*

  - Solution: Ensure each section was spaced adequately& minimal colors(five) to ensure site looked clean.

---

*"Good afternoon, my name is Helen a code editor. I would like the website to be easy to navigate, as it's a pain having to scroll back to the top of each page every time I want to access a different part of a website."*

  - Solution: Top horizontal navigation bar, bottom navigation button plus a scroll back to the top button. In addition on the homepage slideshow on each slide is a button that accesses that particular trail page.
  
  <br>

## Strategy 

* Firstly I had to establish target audience, Somerset has popular holiday sites such as: Butlins, Haven sites, glamping& camping sites on the quantock hills, Kittisford& Barton and luxury cottages in the rolling hills. 
This shows that the countryside is a glamorous& viable getaway for many families so having a responsive& intuitive website can display these amazing trails and the location of them is very important.

* New locals to Somerset can also benefit as getting to know the area is an important part of settling in; a visually pleasing site would make a good impression and encourage user to explore the area further. And lastly there are many local people who have lived in Somerset for years and have never explored these trails; implementing a Google maps API raises awareness of these trails to those potential users.

## Scope

The next problem to solve was that there was already a great website called: https://www.nationaltrail.co.uk/en_GB/ - so what could I offer that is different? 
Users that come to this site aren't looking for trails in Wales or the north of England, this sites scope is specifically aimed towards users who either are local or who are visitting the Somerset area for a period of time. 

So the next step was figuring out how to maximise the user experience and present the best of Somerset trails using imagery as primary source of information for the user. The solution came in the form of two major features - a slideshow& a Google map on each page, this provides images sourced from Google images and applies Google's powerful maps application which is known worldwide for its quality user experience.

## Wire-Frames

### Homepage

<details>
  <summary>Home page header wireframe</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/home-header.png" target="_blank" rel=""/>
</div>
  </details>
  
  <details>
  <summary>Home page body wireframe</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/home-body.png" target="_blank" rel=""/>
</div>
  </details>
  
  <details>
  <summary>Home page footer wireframe</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/footer.png"
         </div>
    </details>
  
  ### Results page
  
   <details>
  <summary>Results page header</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/results-header.png"
         </div>
    </details>
    
   <details>
  <summary>Results page body</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/results-page.png"
         </div>
    </details>
    
  <details>
  <summary>Results page footer</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/wire-frame/footer.png"
         </div>
    </details>
    
## Features

### Navigation bar feature

* *The navigation bar for __homepage__ and each __trail result page__ contains two tabs: home and Somerset trails.*

* *The home tab acts a tool for the user to access the homepage.*

* *The Somerset trails tab is a hover drop-down element, when the user hovers on the tab; the navigation bar expands and a box drops down.*

* *The dropdown box provides every trail available to the user at a single click and whilst hovering over each trail name the background lights up green.*

<details>
  <summary>Navigation& Navigation dropdown</summary>
  <br>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/home-nav-ss.jpg" target="_blank" rel=""/>
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/open-home-ss.jpg" target="_blank" rel=""/>
  </div>
  </details>
  
  #### Navigation bar Summary: 
   - *This feature was inspired by user stories, specifically, user Helen who asked for the site to be easy to navigate.*
   
   ----

### Slideshow feature

* *The slideshow on the __homepage__ will have a picture of each trail accompanied with a caption& a button so the user can access that specific trail immediately.*

* *The slideshow on each __trail results page__ will be a series of images of that trail.*

* *The slideshow is automatic, with each slide changing every two seconds.*

<details>
  <summary>Slideshow</summary>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/home-gallery-ss.jpg" target="_blank" rel=""/>
  </div>
  </details>
  
  #### Slideshow Summary:
   - *This feature was inspired by user stories, in particular, user Grant who who wanted lots of images and minimal text.*
   
   ----

### Google maps feature

* *The map on the __homepage__ will be a map of the somerset area with pointers on each individual trail locations.*

* *The __homepage map__ will have a terrain& satellite toggle buttons.*

* *The map on the __trail result page__ will be zoomed in on that particular trail displaying trail location.*

* *Each map has the ability to access street view of each trail, by dropping the little figure onto the map.*

<details>
  <summary>Somerset Maps</summary>
<div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/somerset-map-ss.jpg" 
     target="_blank" rel=""/>
  </div>
  </details>
  
  #### Google Maps Summary:
   - *The Google maps feature was inspired by user stories and the ambition to exceed user expectations by adding not only imagery but virtual reality which each user can use to explore each trail and the general area.*
   
   ----

### Explore tab feature

* *An enlarge dropup button placed directly above the footer section, the dropup box is accessed by hovering the cursor over the button.*

* *The dropup button is interactive& shrinks once the user hovers over it.*

* *The box contains the other trails links so the user can access the next trail with ease.*

  <details>
  <summary>Bottom page navigation</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/button-ss.jpg" target="_blank" rel=""/>
  <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/open-button-ss.jpg" target="_blank" rel=""/>
</div>
    </details>
    
   #### Explore tab Summary:
   - *The explore tab was inspired by user story regarding navigation, also because of the difficulty of creating a fixed navigation bar feature that would follow the user as he/she scrolled the page(See https://github.com/michodgs24/Somerset-Trails/issues/11#issue-635441825 for further details on navigation difficulties). The explore tab is a compromise as once the user reaches the bottom of the page, the user can just hover over the tab and each trail will be available with one click.*
   
   ----

### Scroll back to top of page button feature

* *A button placed on the right hand side of the page, user can click the button and will be taken back to the top of the respective page.*

* *The button only appears once the user has scrolled past the top navigation bar, the button hovers on the far right of the screen as to not be distracting but still noticeable.* 

<details>
  <summary>Scroll tab</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/scroll-top-ss.jpg" target="_blank" rel=""/>
         </div>
 </details>
  
  #### Scroll Summary:
   - *The scroll back to top button was inspired by navigation, so if the user did want to return back to the top of the page, just one click of the scroll button it will ease up automatically.* 
   
   ----
  
### Footer feature
  
  * *Footer section signals to the user that the page has ended and provides links to homepage social media.*
  
  * *The links are center horizontally, with a light orange background& styled green. Social media: Facebook and twitter in icon form that opens a new browser tab when clicked on, which takes the user to either our facebook page or login page if not signed in.*  
  
  <details>
  <summary>Footer section</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/footer-ss.jpg" target="_blank" rel=""/>
  </div>
  </details>
  
 #### Footer Summary:
   - *Although the footer signals the end of the page, it is still important as spreading the word of the website via social media is such an important tool to raise awareness of the site.*
   
## Features left to implement
   - Summary *"With future iterations of the website, the primary aims are to expand the number of trails and enhance the content of each trail with further images and Google maps capabilities as these are the main features."*
 
 #### Read full article here - https://github.com/michodgs24/Somerset-Trails/issues/1#issue-612876703

## Technologies

* Html, Css and Javascript language

* Balslamiq - https://balsamiq.com/

* JQuery library - https://code.jquery.com/jquery-3.2.1.slim.min.js         

* W3.CSS - https://www.w3schools.com/w3css/4/w3.css

* Google Maps - https://developers.google.com/maps/documentation/javascript/examples

* JS hint - https://jshint.com/

* W3S html& css validator - https://validator.w3.org/

* mobiReady - https://ready.mobi/

* Google mobile friendly test- https://search.google.com/test/mobile-friendly

* Lighthouse - Find via google developer tools in browser.

## Testing

### Testing site on different browsers - i.
Shared the link on google, internet explorer and yahoo to ensure the site looks and works as it should on different browers. 

### Testing device on various screen sizes - ii. 
Opened Google developer tools and toggled the site between various devices, that include:

* iphone X
* Moto G4
* Pixel 2
* Pixel 2 XL
* iphone 5/SE
* iphone 6/7/8 & plus
* ipad and ipad pro

Also opened site on Samsung S10 mobile device and explored all the features.


#### Summary: 
*Device looked& worked as intended on every device and screen size that was available, the primary mobile testing screen was the iphone X as this had the ratio of 375 x 812 (width x height), with it being such a narrow width ensuring features such as the drop-up navigation box had to be carefully monitored to ensure no overlap thus causing x-scroll.*

## Site performance testing

### Testing mobile friendliness - iii.
*Applied three different verified automated online testing tools to ensure website is ready for mobile:*

1.
### Google developer tool lighthouse:
   - Opened Google developer tools on-site, find lighthouse on navigation bar(next to security) and click generate report.

<details>
  <summary>Lighthouse Results</summary>
  <br>
  <div align="center">
    <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/lighthouse-ss.jpg"
         </div>
 </details>
  
   - Summary: *"The lighthouse tool provided a good insight into the website mobile performance and assisted the development process by suggesting the scroll event-listener to improve scroll on mobile.
Although this suggestion helped the scroll performance on mobile, re-running the lighthouse tool again, there was no improvement. 
During the evaluation of the feedback, it is clear the chrome extensions have a negative impact on every category of the site, performance is also negatively impacted due to the number of unique domains called such as font awesome or JQuery. I estimate that the site does indeed meet the required standard for mobile and the results attained from Google mobile test, back this estimation. Future iterations of the site to look further into solutions to improve these statistics, in particular, the performance category by reducing the special domains and reducing file size."*

#### Update:
  - Through automating test provided by mobiReady, special domains have been reduced to six, future iterations to focus on reducing file size thus faster loading times.

#### Lighthouse results discussed here: https://github.com/michodgs24/Somerset-Trails/issues/10#issue-634894703

----

2.
 ### Google mobile friendly test:
   - Entered website link as indicated into enter bar on homepage, an automated testing tool to verify if site is equipped for mobile devices follow link below to see the results:

https://search.google.com/test/mobile-friendly?id=VI5xc_oZOk01oyRxKnw2GQ

   <details>
  <summary>Google mobile test</summary>
  <br>
  <div align="center">
<img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/google-test-ss.jpg" target="_blank" rel=""/>
         </div>
 </details>
 
  - Summary: *"This tool has determined that the Somerset Trails website is mobile-friendly through its robust testing procedure. Future iterations of the site will look to address loading times."*
 
 #### Google mobile friendliness results discussed here - https://github.com/michodgs24/Somerset-Trails/issues/14#issue-639764387
 
 ----
3.
### mobiReady mobile test:
  - Enter website link as indicated into enter bar on homepage, press enter and the site automates the website to whether it will be mobile ready.
    
  <details>
  <summary>mobiReady</summary>
  <br>
  <div align="center">
 <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/mobi-ss.jpg" target="_blank" rel=""/>
 <img src="https://github.com/michodgs24/Somerset-Trails/blob/master/assets/images/readme/mobi-results-ss.jpg" target="_blank" rel=""/>
         </div>
 </details>

   - Summary: *"Overall this tool proved useful as it highlighted issues within the website that hindered user experience on mobile devices and provided valuable suggestions to resolve existing errors within the site. Although there is still one major fail and six minor fails, this will allow the developer to focus on these specific areas in future iterations of the website."*
  
#### mobiReady results discussed here - https://github.com/michodgs24/Somerset-Trails/issues/15#issue-639850820

*Automated testing provided great value to shedding light on issues within the site as human error is very prevalent in the development process. The downside to this testing is that the testing was done virtually at the end of the process and some features such as the images. Due to the sheer amount(twenty-five) of images, it causes delays in loading times and being the end of the process there is not enough time to re-package a more effective& efficient use of those images.*

*Future iterations of the project, each feature will be tested individually as the project goes through development phase, although this may take more time it will cause less issues when the project is at the end and the site will be more robust.*

----

## Functional testing 
To ensure each feature works as intended, I manually tested each section from navigation bar to the footer icon links.

##### Footage of manual testing of each feature:
  
  - Navigation feature demo: https://www.youtube.com/watch?v=rh5Chjdkfms

  - Slideshow feature demo: *https://www.youtube.com/watch?v=HrrLd142sC8*

  - Google Maps feature demo: https://www.youtube.com/watch?v=56QKj-ul_iI

  - Bottom navigation feature demo: https://www.youtube.com/watch?v=bKr4JHP7VkE

  - Scroll to top feature demo: https://www.youtube.com/watch?v=Lu2wbj7Zdi8

  - Footer feature demo: https://www.youtube.com/watch?v=M-4EeGWfsxI

   - Summary:
   *"Functional testing has been positive overall with only two slight issues which are more performance errors rather than functional as all features work as expected."*
   
 #### Read full manual walk-through of each feature and how is should work here: https://github.com/michodgs24/Somerset-Trails/issues/17#issue-646701558
 
 
 ----

## Code validity

### Testing Code validity - iiii.
Tested html and css code formatting with https://validator.w3.org/ - done by copying& pasting the code via direct input into the site text box. 

Tested the JavaScript code with https://jshint.com/ - done by copying& pasting the code via direct imput into the site text-area. 

#### - Summary:
*No errors were found in either tests, ensuring code is error free.*

---- 

### Testing website on mobile - iiiii
Copied site link: https://michodgs24.github.io/Somerset-Trails/ and explored the site testing each feature and the testing was done on a Samsung Galaxy S10 mobile device.
Also tested the smoothness of the scroll.

#### - Summary:
*All features work as intended, scroll is reasonably smooth and the only issue found was to do with the bottom navigation box which has been resolved.(see project barriers& solutions - https://github.com/michodgs24/Somerset-Trails/issues/16#issue-646458556 for in depth discussion on bottom navigation)*

#### See mobile test footage here: 
*Exploring features: https://youtu.be/HtJoxYOrtiY*
*Mobile scroll: https://youtu.be/jPsWYNgaCvY* 

----

## Deployment
* This site is hosted using GitHub pages, deployed directly from the master branch. 

* The deployed site will update automatically upon new commits to the master branch. 

* In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

* To run locally, you can clone this repository directly into the editor of your choice by entering git clone
https://github.com/michodgs24/Somerset-Trails into your terminal. 

* To cut ties with this GitHub repository, type git remote rm origin into the terminal.

* When the code is downloaded as a .zip it can be unzipped and runned by opening the unzipped folder and then execute index.html. 

* The code will be executed in the browser that is set as main browser, this can be Chrome or one of the other available browsers. 
When executed the homepage will appear.

## Project barriers and the solutions
*This section looks into the barriers that occurred during the process of this building this project and what solutions were chosen to hurdle the barriers:*

<br>

#### Navigation bar barriers& solutions - 
  
  - Summary: 
  *"The navigation bar looks clean& interactive and works as intended. The drop-up nav and scroll to the top button provide greater ease of use to the user thus an effective solution. Future iterations of the site will aim to add the site logo to the navigation bar, as will make this feature more personalised to this website."*

#### Read full article here -  https://github.com/michodgs24/Somerset-Trails/issues/11#issue-635441825

-----

#### Slideshow barriers& solutions - 
  
  - Summary:
  *"The slideshow works as intended, albeit a slight jolt with some images due to varying heights but is barely noticeable. Future iterations of the site will address this."*

#### Read full article here - https://github.com/michodgs24/Somerset-Trails/issues/12#issue-635778916

-----

#### Google Maps barriers& solutions - 
  
  - Summary:
*"Although the implementation of maps did present significant challenges, the value of the maps to the user experience is immense as it adds a different dimension with its virtual capability.  Improvement still to be made though, as the maps inline script on each page is bloated."*

#### Read full article here -  https://github.com/michodgs24/Somerset-Trails/issues/13#issue-637367865

#### Update - 
Moving Google maps documentation from HTML documents and into an external .JS file was discussed with my mentor, code institute and also learning people. The answer across the board was that due to calling multiple different maps with varying markers across the site, it will not be possible. If for example I were just calling the one single map, it would not be an issue as this is shown in the code institute tutorial - *Adding The Map Element (Bootstrap 4)* or using google developers tutorial *https://developers.google.com/maps/faq* to append to the script tag of the HTML document.

----

#### Bottom navigation barriers& solutions - 
   
   - Summary:
   *"The issues found with the drop-up were found whilst testing the site on different device screens and physically using the site with Samsung S10 mobile device. Once the width and positioning was adapted as stated above, this feature works as intended. Future iterations to expand on the design of the feature, adding the site logo and an image of each trail when user hovers over that trail option."*
   
 #### Read full article here - https://github.com/michodgs24/Somerset-Trails/issues/16#issue-646458556
 
 -----
 
 <br>

## issues and bugs
*This section looks into what existing issues that are still present in the project& what future iterations could do to resolve these issues:*

* __Slideshow__ - 

  - Summary 
  *"Images are such an important aspect of this website, beginning with user stories that asked for the site to be primarily images instead of text and the subject being outdoor trails. Future iterations will not only look into resolving existing issues but also look to expand and increase the quality of each image."*

#### Read full article here - https://github.com/michodgs24/Somerset-Trails/issues/9#issue-634880128

-----

* __Banner__ -  

  - Summary 
  *"The banner works as intended once the page is refreshed, future iterations to look at ways to resolve the issue by reducing the file size or a way to help the browser load an image of that size more efficiently."*

#### Read full article here - https://github.com/michodgs24/Somerset-Trails/issues/8#issue-629929008

-----

## Acknowledgements

* W3.CSS - https://www.w3schools.com/w3css/4/w3.css.
  - Credit to W3.schools for navigation, slideshow, bottom-nav and scroll to the top button.

* Code institute - https://codeinstitute.net/
  - Credit to code institute walk project for the banner animation.

* Google Developers - https://developers.google.com/
  - Credit to google developers documentation for mapping code.

* Site point - https://www.sitepoint.com/google-maps-javascript-api-the-right-way/
  - Credit site point documentation on how to plot markers
  
* W3S validator -  https://validator.w3.org/
  - Credit W3S for ensuring html& css code is error free.

* JSHint -  https://jshint.com/
  - Credit JSHint for ensuring JavaScript code is error free.
  
* Lighthouse - find in developer tools
  - Credit lighthouse for providing critical analysis of site.

* mobiReady - https://ready.mobi/
  - Credit mobiReady for automated mobile testing service to ensure site is fit for mobile
  
* Google mobile friendly test - https://search.google.com/test/mobile-friendly
  - Credit Google mobile testing to ensure site is error free and mobile friendly
  
 #### All code adapted is for educational purposes only and not for commercial gain.

## External Media 
All images were take from Google images advanced search with filter - free to use or share.
