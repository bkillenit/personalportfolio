var menuBarHTML = ' \
  <nav class="ui menu fixed"> \
    <a href="./index.html" id="index" class="item">Home</a> \
    <div class="right menu"> \
      <a href="./about.html" id="about" class="item">About</a> \
      <a href="./portfolio.html" id="portfolio" class="item">Portfolio</a> \
      <a href="./contact.html" id="contact" class="item">Contact</a> \
  	</div> \
  </nav> \
';

document.write(menuBarHTML);

// the block of code below checks which page the user is on and adds the active class to the corresponding nav bar
// element to represent where they are within the website
curPageURL = window.location.pathname;

function contains(string, searchValue) {
	if(string.indexOf(searchValue) > -1 ) {
		return true;
	} else {
		return false;
	}
}

activePage = "";
navBarPagesArray = ["index","about", "portfolio", "contact"];

for(i = 0; i < navBarPagesArray.length; i++) {
	if(contains(curPageURL, navBarPagesArray[i])) {
		activePage = navBarPagesArray[i];
		break;
	}
}

//used vanilla javascript to edit the DOM element instead of jQuery to avoid importing the jQuery library
var activeNavElement = document.getElementById(activePage);
activeNavElement.className = activeNavElement.className + " active";