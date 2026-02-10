document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let y = Number(document.getElementById("number").value);
if((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0){
  result.textContent = "Leap Year";
}else{
  result.textContent = "Not a Leap Year";
}

});