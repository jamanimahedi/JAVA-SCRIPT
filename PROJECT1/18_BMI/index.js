document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let bmi = Number(document.getElementById("number").value);
if(bmi < 18.5){
  result.textContent = "Underweight";
}else if(bmi < 25){
  result.textContent = "Normal";
}else{
  result.textContent = "Overweight";
}

});