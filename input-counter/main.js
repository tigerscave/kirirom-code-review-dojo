let num = 0;

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const input = document.getElementById("numberInput");
const number = document.getElementById("number");

const handleButtonClick = symbol => () => {
  const val = parseInt(input.value);
  if (Number.isNaN(val) && symbol !== "") return;
  if (symbol === "+") {
    number.textContent = (num += val).toString();
  } else if (symbol === "-") {
    number.textContent = (num -= val).toString();
  } else {
    number.textContent = "0";
    num = 0;
  }
  input.value = null;
};

plusButton.addEventListener("click", handleButtonClick("+"));
minusButton.addEventListener("click", handleButtonClick("-"));
resetButton.addEventListener("click", handleButtonClick(""));
