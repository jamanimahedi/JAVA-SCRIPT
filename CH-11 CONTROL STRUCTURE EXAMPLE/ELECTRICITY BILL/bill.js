document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();

  let units = Number(document.getElementById("units").value);
  let bill;

  if(units <= 100)
    bill = units * 3;
  else if(units <= 200)
    bill = 100*3 + (units-100)*5;
  else
    bill = 100*3 + 100*5 + (units-200)*8;

  document.getElementById("result").textContent =
    "Bill = ₹" + bill;
});
