"use strict"

// Constant Variable
const	appleButton = document.getElementById("apple");
const	bananaButton = document.getElementById("banana");
const	orangeButton = document.getElementById("orange");
const	resetButton = document.getElementById("reset");
const	textElement = document.getElementById("text")

function appleButtonClick() {
	// body...
	textElement.textContent = 'APPLE';
}

function bananaButtonClick() {
	// body...
	textElement.textContent='BANNA';
}

function orangeButtonClick() {
	// body...
	textElement.textContent='ORANGE';
}

function resetButtonClick() {
	// body...
	textElement.textContent='-';
}


appleButton.addEventListener('click',appleButtonClick);
bananaButton.addEventListener('click',bananaButtonClick);
orangeButton.addEventListener('click',orangeButtonClick);
resetButton.addEventListener('click',resetButtonClick);
