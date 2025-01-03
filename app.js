const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



// PROJECT 1

var myElement = document.getElementById("pro1");
myElement.addEventListener("click", function() {
  window.open("https://golessthan.com");
});
// PROJECT 2

var myElement = document.getElementById("pro2");
myElement.addEventListener("click", function() {
  window.open("https://redux.mymoveday.com");
});

// PROJECT 3

var myElement = document.getElementById("pro3");
myElement.addEventListener("click", function() {
  window.open("https://indsupplies.ae/");
});

// PROJECT 4

var myElement = document.getElementById("pro4");
myElement.addEventListener("click", function() {
  window.open("https://studdle.co.uk/");
});

// PROJECT 5

var myElement = document.getElementById("pro5");
myElement.addEventListener("click", function() {
  window.open("https://adilhamid.com/");
});
// PROJECT 6

var myElement = document.getElementById("pro6");
myElement.addEventListener("click", function() {
  window.open("https://artificialgrass-birmingham.co.uk/");
});
// PROJECT 7

var myElement = document.getElementById("pro7");
myElement.addEventListener("click", function() {
  window.open("https://beyondbeautysalonstudios.com/");
});
// PROJECT 8

var myElement = document.getElementById("pro8");
myElement.addEventListener("click", function() {
  window.open("https://golessthan.com");
});

var myElement = document.getElementById("pro9");
myElement.addEventListener("click", function() {
  window.open("https://mlgproperties.es/");
});

var myElement = document.getElementById("pro10");
myElement.addEventListener("click", function() {
  window.open("https://iridescence.agency");
});

var myElement = document.getElementById("pro11");
myElement.addEventListener("click", function() {
  window.open("www.kleinkitch.com");
});

var myElement = document.getElementById("pro12");
myElement.addEventListener("click", function() {
  window.open("deals4fit.com");
});

var myElement = document.getElementById("pro13");
myElement.addEventListener("click", function() {
  window.open("amtradersraj.com");
});

var myElement = document.getElementById("pro14");
myElement.addEventListener("click", function() {
  window.open("www.danaosbornedesign.com");
});
