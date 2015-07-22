$(document).ready(function(){
	var menuBarHTML = ' \
		<div class="ui fixed menu"> \
			<a href="./" id="index" class="item">Home</a> \
			<div id="contentLinks" class="menu"> \
				<a href="./about.html" id="about" class="item">About</a> \
				<a href="./experience.html" id="experience" class="item">Experience</a> \
				<a href="./projects.html" id="projects" class="item">Projects</a> \
				<a href="./contact.html" id="contact" class="item">Contact</a> \
			</div> \
		</div> \
	';

	// alert( $( document ).width());
	$('body').prepend($.parseHTML(menuBarHTML));

	// the block of code below checks which page the user is on and adds the active class to the corresponding nav bar
	// element to represent where they are within the website
	curPageURL = window.location.pathname;
	activePage = "";
	navBarPagesArray = ["index","about", "experience","projects", "contact"];

	function contains(string, searchValue) {
		return string.indexOf(searchValue) > -1;
	}

	for(i = 0; i < navBarPagesArray.length; i++) {
		if(contains(curPageURL, navBarPagesArray[i])) {
			activePage = navBarPagesArray[i];
			break;
		}

		// sets the active page to index if none of the nav bar titles are found, ie. on the index page
		activePage = "index";
	}

	// jQuery DOM element selection based on active page, active class added to the selected element
	$('#'+activePage).addClass("active");
});