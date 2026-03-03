// filter() method
// filter() returns a new array with elements that match the given condition.

let temperatures = [32, 45, 28, 39, 41, 22, 30, 50];

console.log(temperatures);

let hotDays = temperatures.filter((temp) => temp > 35);

console.log("Hot Days", hotDays);


// 2nd Example (Array of Objects)

let courses = [
    { title: "HTML", duration: 1, level: "Beginner" },
    { title: "CSS", duration: 2, level: "Beginner" },
    { title: "JavaScript", duration: 3, level: "Intermediate" },
    { title: "React", duration: 4, level: "Advanced" },
];

console.log("courses :-", courses);

let advancedCourses = courses
    .filter((course) => course.duration >= 3)
    .map((course) => course.title);

console.log(advancedCourses);