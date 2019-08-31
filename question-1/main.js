"use strict"

// write conde in here

const appleButton = document.getElementById("apple");
const bananaButton = document.getElementById("banana");
const orangeButton = document.getElementById("orange");
const resetButton = document.getElementById("reset");
const setText = document.getElementById("text");


function changeText (text) {
	setText.textContent = text;
}

appleButton.addEventListener('click', () => changeText ("APPLE"));
bananaButton.addEventListener('click', () => changeText ("BANANA"));
orangeButton.addEventListener('click', () => changeText ("ORANGE"));
resetButton.addEventListener('click', () => changeText ("-"));

