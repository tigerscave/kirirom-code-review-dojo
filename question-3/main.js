"use strict"

// write conde in here
const textNumber = document.getElementById("number")
const input = document.getElementById("numberInput")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const resetBtn = document.getElementById("reset")

function changeNum(number) {
    if (isNaN(number)) {
        return alert('Invalid error')
    }
    textNumber.innerHTML = parseInt(textNumber.innerHTML) + number
}

plusBtn.addEventListener('click', () => {
    changeNum(parseInt(input.value))
})
minusBtn.addEventListener('click', () => {
    changeNum(parseInt(input.value) * -1)
})
reset.addEventListener('click', () => { textNumber.innerHTML = 0 })
