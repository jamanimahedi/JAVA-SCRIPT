document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let age = Number(document.getElementById("number").value);
if(age < 18){
  result.textContent = "Not Eligible";
}else if(age < 60){
  result.textContent = "Eligible";
}else{
  result.textContent = "Senior Citizen";
}

});