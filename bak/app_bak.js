// Set Vars
const number = document.querySelector('.number');
const letters = document.querySelector('.letters');
const runBtn = document.querySelector('.run-btn');
const numBtn = document.querySelector('.num-btn');
const letBtn = document.querySelector('.let-btn');
const timerBtn = document.querySelector('.timer-btn');

let numVis = true;
let letVis = true;
let timerState = false;
let slideShow;
let countDownNum;
// let numba = 3;

// Listen For Clicks
runBtn.addEventListener('click', createMajor);
numBtn.addEventListener('click', toggleNum);
letBtn.addEventListener('click', toggleLet);
timerBtn.addEventListener('click', toggleTimer);

// Calculate Letters
function calculateLetters(randomNum){
	let letter;
	switch (randomNum) {
		case 0:
			letter = "S, Z";
			break;
		case 1:
			letter = "T, D";
			break;
		case 2:
			letter = "N";
			break;
		case 3:
			letter = "M";
			break;
		case 4:
			letter = "R";
			break;
		case 5:
			letter = "L";
			break;
		case  6:
			letter = "CH, SH, J";
			break;
		case  7:
			letter = "K, G";
			break;
		case  8:
			letter = "F, V";
			break;
		case  9:
			letter = "P, B";
			break;
	}

	// return letter for 0-9
	return letter;
}

function createMajor(e){

	if (e !== undefined){

		// This is undefined on the timer
		e.preventDefault();

	} else {

		// Do nothing

	}

	// Random Choice 0 - 9
	const randomNum = Math.floor(Math.random()*10);

	// Inject the values into DOM
	number.innerHTML = randomNum;
	letters.innerHTML = calculateLetters(randomNum);

	// countDownDisplay(3);
}

// Toggle the numbers
function toggleNum(e) {

	e.preventDefault();

	if (numVis === true) {

		numVis = false;

		// Hide From DOM
		number.classList.remove('visible');
		number.classList.add('invisible');

		// HTML Button Classes
		numBtn.innerHTML = '<i class="fas fa-eye"></i> Show Numbers';
		numBtn.classList.remove('btn-primary');
		numBtn.classList.add('btn-light');

	} else {

		numVis = true;

		// Show In DOM
		number.classList.remove('invisible');
		number.classList.add('visible');

		// HTML Button Classes
		numBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Numbers';
		numBtn.classList.remove('btn-light');
		numBtn.classList.add('btn-primary');
	}
}

// Toggle the numbers
function toggleLet(e) {

	e.preventDefault();

	if (letVis === true) {

		letVis = false;

		// Hide From DOM
		letters.classList.remove('visible');
		letters.classList.add('invisible');

		// HTML Button Classes
		letBtn.innerHTML = '<i class="fas fa-eye"></i> Show Numbers';
		letBtn.classList.remove('btn-primary');
		letBtn.classList.add('btn-light');

	} else {

		letVis = true;

		// Show In DOM
		letters.classList.remove('invisible');
		letters.classList.add('visible');

		// HTML Button Classes
		letBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Numbers';
		letBtn.classList.remove('btn-light');
		letBtn.classList.add('btn-primary');
	}

}

function toggleTimer(e){

	if (timerState === false){

		timerState = true;

		// Run Major every 3 seconds
		slideShow = setInterval(createMajor, 3000);

		// *** Fix me ***
		// countDownNum = setInterval(countDownDisplay, 1000);

		// Timer button pressed
		console.log('Timer is running...');

		// Change timer button
		timerBtn.innerHTML = '<i class="fas fa-stop-circle"></i> Stop Timer';
		timerBtn.classList.remove('btn-success');
		timerBtn.classList.add('btn-danger');

		// Disable the run button
		runBtn.classList.remove('btn-primary');
		runBtn.classList.add('btn-light');

		createCountDownDiv();


	} else {

		timerState = false;

		// Stop the timer
		clearInterval(slideShow);

		// *** Fix me ***
		// clearInterval(countDownNum);

		// Timer button pressed
		console.log('Timer is OFF');

		// Change timer button
		timerBtn.innerHTML = '<i class="fas fa-play-circle"></i> Start Timer';
		timerBtn.classList.remove('btn-danger');
		timerBtn.classList.add('btn-success');

		// Activate the run button
		runBtn.classList.remove('btn-light');
		runBtn.classList.add('btn-primary');

		removeCountDownDiv();

	}

	e.preventDefault();
}

function countDownDisplay(numba){

	// if(numba === 3){
	// 	numba = 2;
	// } else if(numba === 2){
	// 	numba = 1;
	// }

	// let numba = 3;

	// while (numba > 0) {
	//   numba--;
	//   console.log(numba);
	//   return numba;
	// }

}

function createCountDownDiv(){

	// Create Div For Countdown
	const countDown = document.createElement('div');
	const countDownCol = document.createElement('div');
	const countDownAlert = document.createElement('div');

	// Create Div Classes
	countDown.className = 'row countdown-row';
	countDownCol.className = 'col-sm';
	countDownAlert.className = 'alert alert-primary text-center';

	countDown.appendChild(countDownCol);
	countDownCol.appendChild(countDownAlert);
	countDownAlert.innerHTML = `New Major In <strong>${countDownDisplay.numba} Seconds</strong>...`;

	// Insert countDown after timerBtn
	timerBtn.insertAdjacentElement('afterend', countDown);
}

function removeCountDownDiv(){
	// Remove from page
	countDownLink = document.querySelector('.countdown-row');
	countDownLink.remove();
}