"use strict"

// write conde in here

const appleButton = document.getElementById("apple");
const textApple = document.getElementById("text");
const textBanana = document.getElementById("text");
const bananaButton = document.getElementById("banana");
const textOrange = document.getElementById("text");
const orangeButton = document.getElementById("orange");
const resetButton = document.getElementById("reset");
const emptyText = document.getElementById("text");


function appleButtonClick (){
	
	textApple.textContent = "APPLE"

}

function bananaButtonClick (){
	
	textBanana.textContent = "BANANA"

}
function orangeButtonClick (){
	
	textOrange.textContent = "ORANGE"

}
function resetButtonClick() {
	emptyText.textContent = "-";
}

resetButton.addEventListener('click', resetButtonClick);
appleButton.addEventListener('click', appleButtonClick);
bananaButton.addEventListener('click', bananaButtonClick);
orangeButton.addEventListener('click', orangeButtonClick);
