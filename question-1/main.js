"use strict"
// write conde in here

const text = document.getElementById("text")

function change(id){
    const theButton = document.getElementById(id)
    text.innerHTML = theButton.value
} 