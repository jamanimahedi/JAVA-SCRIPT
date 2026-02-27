let subjects = ["Math", "Physics", "Chemistry", "Biology", "English", "History", "Computer"];

// for loop
for (let i = 0; i < subjects.length; i++) {
  console.log("for :", subjects[i]);
}

console.log(" ");

// for of
for (let i of subjects) {
  console.log("for of :", i);
}

console.log(" ");

// for each
let marks = [45, 60, 75, 80, 55, 90, 70];

marks.forEach(mark => {
  console.log("for each :", mark + 5);
});

console.log(" ");

// Concatenation
let combined = subjects.concat(marks);
console.log("Concatenation :", combined);

console.log(" ");

// to string
console.log("to string :", subjects.toString());