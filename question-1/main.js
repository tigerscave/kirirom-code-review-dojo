"use strict"

// Constant Variable
const	appleButton = document.getElementById("apple");
const	bananaButton = document.getElementById("banana");
const	orangeButton = document.getElementById("orange");
const	resetButton = document.getElementById("reset");
const	textElement = document.getElementById("text")

function appleButtonClick() {
	textElement.textContent = 'APPLE';
}

function bananaButtonClick() {
	textElement.textContent='BANNA';
}

function orangeButtonClick() {
	textElement.textContent='ORANGE';
}

function resetButtonClick() {
	textElement.textContent='-';
}

appleButton.addEventListener('click',appleButtonClick);
bananaButton.addEventListener('click',bananaButtonClick);
orangeButton.addEventListener('click',orangeButtonClick);
resetButton.addEventListener('click',resetButtonClick);
