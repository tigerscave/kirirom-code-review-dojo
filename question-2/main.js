let numbers = 0;
document.getElementById('plus').addEventListener("click", function(){
  numbers++;
  document.getElementById('number').innerHTML = numbers;
})
document.getElementById('minus').addEventListener("click", function(){
  numbers--;
  document.getElementById('number').innerHTML = numbers;
})
document.getElementById('reset').addEventListener("click", function(){
  numbers=0;
  document.getElementById('number').innerHTML = numbers;
})
