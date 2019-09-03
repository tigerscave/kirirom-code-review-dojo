let number = 0;
document.getElementById('plus').addEventListener("click", function(){
  number++;
  calculate("add");
})
document.getElementById('minus').addEventListener("click", function(){
  number--;
  calculate("add");
})
document.getElementById('reset').addEventListener("click", function(){
  number = 0;
  calculate("add");
})
function calculate(x){
    document.getElementById('number').innerHTML = number;
}