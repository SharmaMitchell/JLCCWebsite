const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
var event_item = document.querySelectorAll('.events .events-bottom .events-item');
var event_button = document.querySelectorAll('.events .events-bottom .events-item .events-info .events-info-expand');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 60) {
// 		header.style.backgroundColor = '#5ca997';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//console.log(event_item.length)

function getEventItem(){
	event_item = document.querySelectorAll('.events .events-bottom .events-item');
	event_button = document.querySelectorAll('.events .events-bottom .events-item .events-info .events-info-expand');
	if(event_item.length === 0){
		setTimeout(getEventItem, 250);
	}
	else{
		event_item.forEach((event) => {
			event.addEventListener('click', () => {
				event.querySelector('.events-info.more').classList.toggle('active');
				// mobile_menu.classList.toggle('active');
			});
		});
	}
}

if(event_item.length === 0){ 
	getEventItem();
}
let x = 0;
event_item.forEach((event) => {
	/* Click to expand event details */
	event.addEventListener('click', () => {
		event.querySelector('.events-info.more').classList.toggle('active');
		event_button[x].classList.toggle('active');
		// mobile_menu.classList.toggle('active');
	});
	/* Accessibility - Once user tabs to event, they can expand details with Space or Enter keys */
	/*
	event.addEventListener('keydown', (key) => {
  	if (key.code === 'Space' || key.code === 'Enter') {
	    event.click();
	  }
	});
	*/
	x++;
});