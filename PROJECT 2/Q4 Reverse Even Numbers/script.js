document.getElementById("reverseBtn").addEventListener("click",function(){

let evenNumbers = "";

for(let i=20;i>=1;i--){

if(i % 2 === 0){
evenNumbers += i + ", ";
}

}

document.getElementById("evenResult").innerHTML = evenNumbers;

});