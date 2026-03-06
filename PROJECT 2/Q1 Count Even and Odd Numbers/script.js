document.getElementById("countBtn").addEventListener("click",function(){

let evenTotal = 0;
let oddTotal = 0;

for(let i=1;i<=50;i++){

if(i % 2 === 0){
evenTotal++;
}else{
oddTotal++;
}

}

document.getElementById("result").innerHTML =
"Even Numbers: " + evenTotal +
"<br>Odd Numbers: " + oddTotal;

});