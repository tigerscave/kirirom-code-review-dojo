"use strict"

//write code in here
const number = document.getElementById("number")
const plusBtn = document.getElementById("plusBtn")
const minusBtn = document.getElementById("minusBtn")
const resetBtn = document.getElementById("resetBtn")
const numberTwo = document.getElementById('twoBtn')
const numberThree = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
const numberTwo = document.getElementById('twoBtn')
let value = 0

var array = Array("plus", "minus", "reset", 2, 3, 4, 5, 6, 7,8 )
for (let i = 0; i < array.length; i++) {
    var button = document.createElement('button')
    button.textContent = array[i]
    button.id = array[i]+"Btn"
    let body = document.getElementsByTagName('body')[0]
    body.append(button)
}

