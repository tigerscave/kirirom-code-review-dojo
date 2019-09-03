"use strict"

//write code in here


function change(id){
    const number = document.getElementById("number")
    switch(id){
        case "plus" : number.innerHTML = parseInt(number.innerHTML) + 1
        break;
        case "minus" : number.innerHTML = parseInt(number.innerHTML) - 1
        break;
        case "reset" : number.innerHTML = 0
        break;
    }
}
