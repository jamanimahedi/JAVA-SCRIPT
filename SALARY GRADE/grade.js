document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();

  let s = Number(document.getElementById("salary").value);
  let grade;

  if(s >= 50000) grade = "A";
  else if(s >= 30000) grade = "B";
  else if(s >= 15000) grade = "C";
  else grade = "D";

  document.getElementById("result").textContent =
    "Grade = " + grade;
});
