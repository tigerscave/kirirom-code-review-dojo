
const appleButton = document.getElementById("apple")
const bananaButton = document.getElementById("banana")
const orangeButton = document.getElementById("orange")
const resetButton = document.getElementById("reset")
const textElement = document.getElementById("text")

function changeText(text){
	textElement.textContent = text;
}

appleButton.addEventListener('click',()=>changeText("apple"))
bananaButton.addEventListener('click',()=>changeText("banana"))
orangeButton.addEventListener('click',()=>changeText("orange"))
resetButton.addEventListener('click',()=>changeText("-"))
