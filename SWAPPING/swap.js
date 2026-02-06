function swap(){
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);

  let temp = a;
  a = b;
  b = temp;

  document.getElementById("result").textContent =
    "A = " + a + " , B = " + b;
}
