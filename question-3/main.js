
const numberValue = document.getElementById('number');
const inputField = document.getElementById('numberInput');

document.getElementById('plus').addEventListener('click', () => buttonClicked('plus'));
document.getElementById('minus').addEventListener('click', () => buttonClicked('minus'));
document.getElementById('reset').addEventListener('click', () => buttonClicked('reset'));

function buttonClicked(operate){
    let input = parseInt(inputField.value);
    let number = parseInt(numberValue.textContent);
    
        if (operate == 'reset') 
        {
            numberValue.textContent = 0;     
        } 
        else if(isNaN(input))
        {
            alert("Invalid error")
        }
        else{
            if(operate=='plus') numberValue.textContent = number + input;
            else if(operate =='minus') numberValue.textContent = number - input;
        }
        inputField.value = '';
    }    
    
