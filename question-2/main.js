var a = 0;
document.getElementById('plus').addEventListener("click", function(){
  a++;
  document.getElementById('number').innerHTML = a;
})
document.getElementById('minus').addEventListener("click", function(){
  a--;
  document.getElementById('number').innerHTML = a;
})
document.getElementById('reset').addEventListener("click", function(){
  a=0;
  document.getElementById('number').innerHTML = a;
})
