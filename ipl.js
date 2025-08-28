let arr = ["CSK", "DC", "KKR", "MI", "PBKS", "RCB", "RR", "SRH","LSG", "GT"]
 
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let box = document.querySelector(".box");

button.addEventListener("click",function(){
  let num = Math.floor(Math.random()*arr.length); 
  let winner = arr[num]
  box.textContent = winner
  h1.innerHTML = " Winner "
})

function hello (){
  window.location.reload();
}