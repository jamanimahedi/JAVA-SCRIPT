// indexOf

let courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"];

console.log("index of React :", courses.indexOf("React"));

// includes

console.log("CSS :", courses.includes("CSS"));

console.log("Python :", courses.includes("Python"));


// sort

let letters = ["x", "m", "a", "z", "k", "b"];

console.log("letters : ", letters.sort());

let marks = [78, 45, 90, 66, 82, 55, 39, 100];

console.log("marks : ", marks.sort());

console.log("ascending order : ", marks.sort((a, b) => a - b));

console.log("descending order : ", marks.sort((a, b) => b - a));