document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();

  let amount = Number(document.getElementById("amount").value);
  let time = Number(document.getElementById("time").value) / 12;
  let rate = Number(document.getElementById("rate").value);

  let interest = (amount * time * rate) / 100;

  document.getElementById("result").textContent =
    "Interest = ₹" + interest;
});
