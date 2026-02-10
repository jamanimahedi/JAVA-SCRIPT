document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let c = document.getElementById("number").value.toLowerCase();
if(c === "red"){
  result.textContent = "STOP";
}else if(c === "yellow"){
  result.textContent = "READY";
}else if(c === "green"){
  result.textContent = "GO";
}else{
  result.textContent = "Invalid Signal";
}

});