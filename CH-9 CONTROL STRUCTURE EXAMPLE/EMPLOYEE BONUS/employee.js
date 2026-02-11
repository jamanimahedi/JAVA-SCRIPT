document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();

  let exp = Number(document.getElementById("exp").value);
  let bonus;

  if(exp >= 10) bonus = 10000;
  else if(exp >= 5) bonus = 5000;
  else if(exp >= 2) bonus = 2000;
  else bonus = 0;

  document.getElementById("result").textContent =
    "Bonus = ₹" + bonus;
});
