$(document).ready(function() {
	var currTime = new Date();
	var birthdate = new Date(1991, 7, 11);

	var timeDelta = currTime - birthdate;
	$('.age').text(Math.floor(timeDelta/1000/60/60/24/365));
});