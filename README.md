# La Petite Sirène Website

This is the website of a French restaurant franchise. The business serves relatively expensive food and also hosts 
events across four locations in Dublin. It's a simple, responsive and trendy website that provides visitors with the current menu, 
an opportunity to book tables and events and send feedback via email, as well as showing the opening times and locations on an interactive 
map.

## UX

#### User stories

**First Visitor Goals**

* First time visitors want to understand what the service offers.
* First time visitors want to be able to easily navigate the site and find the information they need.
* First time visitors want to know what the quality of the service is like.

**Returning Visitor Goals**

* Returning visitors want to check the current menu.
* Returning visitors want to make reservations and leave feedback or host an event.
* Returning visitors want to check information pertaining to specific locations of the franchise.

** **

## Design

**Color Scheme**

The site uses a a simple and minimalistic color scheme of black, white and occasionally beige and light orange to highlight 
important elements. The color scheme reflects what one might expect to find the interior of a higher end restaurant to look like. Overall,
the layout is also reminiscent of a menu. 

**Typography**

The site uses the Cedarville Cursive and Cursive fonts. Cedarville Cursive is used for the brand name and some headers. It's a very 
decorative font which makes it excellent for highlighting the most important elements and particularly the brand name, but as it can be 
laborious to read, it was used very sparingly to maintain its impact and ensure clarity of the content. Recursive is used for most of 
the content of the site instead. The fallback fonts are sans-serif and cursive, respectively.

**Imagery**

The site utilizes black and white images that both fit together well with the color scheme of the site and convey the aesthetic of the 
business. The Home page contains a space for a double-background image with the second one having a background color instead to better 
display text. The page for reservations uses a single background image. The rest of the images are the facades and interiors 
of the business on the Locations page.

** **

## Wireframes

Preliminary wireframes were drafted in MS Paint. [Link](https://github.com/ssruoh/CI_MS2/blob/master/La%20Petite%20Sirene%20Wireframes.pdf)

## Features

* Responsive on all screen sizes.
* Each page includes a navigation bar.
* Each page includes a footer with links to restaurant's social media and copyright information.
* The main page includes a short description of the business' purpose and buttons to view the menu and contact form.
* Menu page includes the menu.
* Contact page includes a functional contact form, as well as guidance as to what the form is best used for.
* The Locations page includes images of the franchise locations, as well as their address and opening times. This page also includes a 
functional Google Map that can be used to view the restaurant locations or the user's current location.

**Features To Implement**

* A food ordering functionality with a cart that stores selected items and calculates price totals would ideally be available. 
Currently this is beyond the scope of the tools used for this site, however.
* Offering better visibility for customer reviews. This was initially considered, but in general terms most such 
businesses seem to handle customer experiences via external means such as Google. An info window for the Google Maps showing the business' 
Google reviews for a selected marker could be one option. 

** **

## Languages used

* HTML5
* CSS3
* JavaScript

** **

## Frameworks, Libraries & programs

1. Bootstrap 4.5:
* Used for responsive styling.
2. Font Awesome:
* Used for the star icons separating items on the Menu page.
3. Google Fonts:
* Used to import the fonts used for the website.
4. JQuery:
* Used to enhance navbar responsiveness on smaller device sizes.
5. Git:
* Used for version control via the Gitpod terminal.
6. Github:
* Used to store the website’s code after pushing from Git.
7. EmailJS:
* Used to maintain a contact form for visitors to make queries.
8. Google Maps:
* Used to provide an interactive map, complete with custom locations, information about them and geolocation.

** **

## Testing

The W3C Markup Validator and W3C CSS Validator were used to ensure there are no syntax errors.

W3C Markup Validator [Results](https://github.com/ssruoh/CI_MS2/tree/master/testing_images/w3c_validation_results)

W3C CSS Validator [Results](https://github.com/ssruoh/CI_MS2/tree/master/testing_images/w3c_validation_results)

The site was also tested on Google Chrome, Mozilla Firefox, Microsoft Edge and Internet Explorer browsers.
The website has been viewed on devices with varying screen sizes, such as Iphone 8, Samsung Galaxy J6, iPad, as well as 
desktop and laptop computer screens.

**Known Issues**

* (General) The contact form redirect functionality appears to not work over Github Pages, although it works fine 
from the Gitpod launch version. This seems to be more due to how Github Pages are hosted than a bug, however.

* (General) The contact form 'Contact us' field has some spacing in the field by default when page is loaded.

* (IE11) Background image on Contact page seems choppy when scrolling down.

* (IE11) Google Maps functionality [does not seem to work](https://github.com/ssruoh/CI_MS2/blob/master/testing_images/IE11-GMaps-bug.jpg), in our out of Compatability Mode.

* (iPad) The text on the left split of the index page [have little to no margin](https://github.com/ssruoh/CI_MS2/blob/master/testing_images/iPad-index-margins.jpg). This is difficult to fix due to how the split image 
effect is achieved.

* (iPad) Some of the menu columns [settle rather unevenly.](https://github.com/ssruoh/CI_MS2/blob/master/testing_images/iPad-menu-columns.jpg)

## Deployment

**Github Pages**

The project was published on Github Pages with the following steps:
1. Login to Github and locate the [repository](https://github.com/ssruoh/CI_MS2)
2. Locate the Settings button of the repository
3. Scroll down the Settings page to the Github Pages section
4. Under Source, select "Branch: master" from the dropdown menu
5. Click Save, the page will refresh
6. Scroll down to the Github Pages section again and locate the published link to the [site](https://ssruoh.github.io/CI_MS2/)

**Forking The Repository**

The copy of the Github repository can be forked to another account for viewing or editing without affecting the original one with the following steps:

1. Login to Github and locate the [repository](https://github.com/ssruoh/CI_MS2)
2. On top right, right under the Account menu and Notifications, click on the Fork button. This will create a copy of the repository to your Github account.

**Creating A Local Clone**

1. Login to Github and locate the [repository](https://github.com/ssruoh/CI_MS2)
2. Click on the green Code button
3. Click on the clipboard icon under "Clone with HTTPS" to copy the link
4. Open Git Bash
5. Change the current working directory to whereever you want the clone to be created.
6. Type `git clone` and paste the URL you copied from the clipboard:

```
$ git clone https://github.com/ssruoh/CI_MS2
```

7. Press Enter to create a local clone.

```
$ git clone https://github.com/ssruoh/CI_MS2
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
** **

## Testing User Requirements In UX section

**First Time Visitors**

> First time visitors want to understand what the service offers.

* When loading the site, the visitor is presented a split image. The first one, reserved for text, 
explains what the restaurant is like and where they operate. They are also told what kinds of services they offer. 
The second half features a stylish black and white image that gives the visitor an idea what the premises 
look like.

> First time visitors want to be able to easily navigate the site and find the information they need.

* The landing page provides large buttons to view the things people visiting such a site would likely 
be after: the menu, and a contact page link where they can make a reservation or enquire about hosting an 
event at the franchise. All of content of the site is clearly marked in a simple, well presented navigation 
bar should they require something that is not available right on the landing page, such as location information 
under LOCATIONS.

> First time visitors want to know what the quality of the service is like.

* Restaurant reviews and experiences are typically collated at external sources. To prevent cluttering and 
preserve the minimalistic but stylish appearance of the site, reviews, images of the food and the like 
would be found at the social media of the restaurant. The footer found on each page contains links 
to the restaurant's social media presence.

**Returning Visitors**

> Returning visitors want to check the current menu.

* The menu changes often, and the site makes checking the current one easy. A large button that directs the 
user to the menu is on the landing page, and the menu can be navigated to from any page via the navigation bar.

> Returning visitors want to make reservations and leave feedback or host an event.

* The landing page has a large button to the contact page, and clearly states that it can be used for 
various queries such as making reservations, leaving feedback or enquiring about hosting events. On the contact page, 
the user is also informed that reservations can be made by telephone, and that the phone numbers for each branch can be 
found on the Locations page. An accompanying link to the Locations page is also provided.

> Returning visitors want to check information pertaining to specific locations of the franchise.

* The restaurant has several locations, meaning each location has information specific to it. A link to the Locations page can be 
accessed from any part of the site via the navigation bar. This page collates all this information, including addresses, opening times and telephone numbers. 
The page also provides an accompanying map where users can view the location, and even view their own location. 

## Credits

**Code**

**Bootstrap4**: Various Bootstrap Library resources were used to create the site.

**EmailJS**: Used to implement the contact form.

**Google Maps**: Used to implement the map on Locations page.

The Geolocation functionality of the Google Maps utilized for the locations page relies heavily on [the code provided by Google](https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript) for the same functionality.

Similarly, [the Google code for using markers](https://developers.google.com/maps/documentation/javascript/marker-clustering) was used, although it was customized for the purposes of this site to a larger degree.

An altered version of [this solution](https://www.youtube.com/watch?v=bh3UAetYkUI&t=184s) was used for the side-by-side image layout for index.html.

**Content**

Site content was written by the developer, with the exception of the Menu. Menu items were taken from the 
menus of French restaurants [Chez Max](https://deliveroo.ie/menu/dublin/st-stephens-green/chez-max?utm_medium=affiliate&utm_source=google_maps_link), 
[La Maison](http://lamaisondublin.com/menu/) and [Excuse My French](https://www.excusemyfrench-nyc.com/).

The basic idea for the index.html layout was taken from entry 14. in [this article](https://www.sitebuilderreport.com/inspiration/restaurant-websites) on web design layouts, ‘Zia Sonia.’

The fictitious phone numbers for the business were taken from [this site](https://fakenumber.org/ireland) for fake number generation.

**Media**

The images used for the site were obtained from Google Images.

**Acknowledgments**

Code Institute Tutors for their support.

My Mentor for helpful ideas and feedback.

My friends for assisting with testing the site.