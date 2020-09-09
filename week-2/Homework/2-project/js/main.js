let blueBtn = document.querySelector('#blueBtn');
let btnDonate = document.querySelector('.btn-primary');
let btnVolunteer = document.querySelector('.btn-secondary');
let orangeBtn = document.querySelector('#orangeBtn');
let greenBtn = document.querySelector('#greenBtn');

// EventListener
// - When clicking ** blue ** it should change:
blueBtn.addEventListener('click', function() {
	let Jumbotron = document.querySelector('.jumbotron');
	Jumbotron.style.backgroundColor = '#588fbd';
	btnDonate.style.backgroundColor = '#f0ad4e';
	btnVolunteer.style.backgroundColor = 'black';
	btnVolunteer.style.color = 'white';
});

// EventListener
// - When clicking ** orange ** it should change:
orangeBtn.addEventListener('click', function() {
	let Jumbotron = document.querySelector('.jumbotron');
	Jumbotron.style.backgroundColor = '#f0ad4e';
	btnDonate.style.backgroundColor = '#5751fd';
	btnVolunteer.style.backgroundColor = '#31b0d5';
	btnVolunteer.style.color = 'white';
});

// // EventListener
// When clicking ** green ** it should change:

greenBtn.addEventListener('click', function() {
	let Jumbotron = document.querySelector('.jumbotron');
	Jumbotron.style.backgroundColor = '#87ca8a';
	btnDonate.style.backgroundColor = 'balck';
	btnVolunteer.style.backgroundColor = '#8c9c08';
	btnVolunteer.style.color = 'white';
});
