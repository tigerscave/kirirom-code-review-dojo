"use strict"

// write code in here

const appleButton = document.getElementById('apple')

const bananaButton = document.getElementById('banana')

const textElement = document.getElementById('text')

function appleButtonClick(){
  alert('hello apple')
}

appleButton addEventListener('click', appleButtonClick)
