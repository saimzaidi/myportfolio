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
  window.open("https://marlonbrand.io/");
});
// PROJECT 2

var myElement = document.getElementById("pro2");
myElement.addEventListener("click", function() {
  window.open("https://www.lindasegallanable.com/");
});

// PROJECT 3

var myElement = document.getElementById("pro3");
myElement.addEventListener("click", function() {
  window.open("https://www.mlaestheticsv1.qlogictechnologies.com/");
});

// PROJECT 4

var myElement = document.getElementById("pro4");
myElement.addEventListener("click", function() {
  window.open("http://thewaffleaffair.com/");
});

// PROJECT 5

var myElement = document.getElementById("pro5");
myElement.addEventListener("click", function() {
  window.open("https://www.sarahmichelle.qlogictechnologies.com/");
});
// PROJECT 6

var myElement = document.getElementById("pro6");
myElement.addEventListener("click", function() {
  window.open("https://dskroofing.qlogictechnologies.com/");
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
  window.open("www.kleinkitch.com");
});

var myElement = document.getElementById("pro11");
myElement.addEventListener("click", function() {
  window.open("https://iridescence.agency");
});
