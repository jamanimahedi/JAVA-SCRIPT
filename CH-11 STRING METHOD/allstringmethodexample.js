//ALL STRING METHOD EXAMPLE//Z

// charAt()
// Returns character at specified index
let str = "Frontend Developer";
console.log("charAt:", str.charAt(0));
console.log("charAt:", str.charAt(9));


// concat()
// Joins two or more strings
let greet = "Hello";
console.log("concat:", greet.concat(" Jamani"));
console.log("concat:", greet.concat(" IT Student"));


// endsWith()
// Checks if string ends with given value (true/false)
let city = "Bhavnagar";
console.log("endsWith:", city.endsWith("gar"));
console.log("endsWith:", city.endsWith("nav"));


// includes()
// Checks if string contains given word (true/false)
let course = "JavaScript Programming";
console.log("includes:", course.includes("Script"));
console.log("includes:", course.includes("Python"));


// indexOf()
// Returns first position of character
// If not found returns -1
let fruit = "mango";
console.log("indexOf:", fruit.indexOf("a"));
console.log("indexOf:", fruit.indexOf("z"));


// lastIndexOf()
// Returns last occurrence position
let word = "banana";
console.log("lastIndexOf:", word.lastIndexOf("a"));
console.log("lastIndexOf:", word.lastIndexOf("n"));


// match()
// Searches string and returns matched value
// Returns null if not found
let line = "Learning JavaScript is fun";
console.log("match:", line.match("JavaScript"));
console.log("match:", line.match("Python"));


// repeat()
// Repeats string given number of times
let text = "Hi ";
console.log("repeat:", text.repeat(2));
console.log("repeat:", text.repeat(4));


// replace()
// Replaces first matching value
let message = "I love coding";
console.log("replace:", message.replace("coding", "designing"));
console.log("replace:", message.replace("I", "We"));


// replaceAll()
// Replaces all matching values
let animals = "dog cat dog";
console.log("replaceAll:", animals.replaceAll("dog", "lion"));
console.log("replaceAll:", animals.replaceAll("cat", "tiger"));


// search()
// Returns index position of match
let profession = "Fullstack Developer";
console.log("search:", profession.search("Dev"));
console.log("search:", profession.search("xyz"));


// slice()
// Extracts part of string
// Supports negative index
let tech = "InformationTechnology";
console.log("slice:", tech.slice(0, 11));
console.log("slice:", tech.slice(-10));


// split()
// Converts string into array
let skills = "HTML,CSS,JS";
console.log("split:", skills.split(","));
console.log("split:", skills.split(""));


// startsWith()
// Checks if string starts with given value
let sentence = "Welcome to Gujarat";
console.log("startsWith:", sentence.startsWith("Welcome"));
console.log("startsWith:", sentence.startsWith("Gujarat"));


// substring()
// Extracts characters between two indexes
// Does not support negative index
let country = "IndiaIsGreat";
console.log("substring:", country.substring(0, 5));
console.log("substring:", country.substring(5, 7));


// toLowerCase()
// Converts string to lowercase
let upper = "HELLO WORLD";
console.log("toLowerCase:", upper.toLowerCase());
console.log("toLowerCase:", "GTU EXAM".toLowerCase());


// toUpperCase()
// Converts string to uppercase
let lower = "frontend";
console.log("toUpperCase:", lower.toUpperCase());
console.log("toUpperCase:", "backend developer".toUpperCase());


// trim()
// Removes spaces from both sides
let space = "   JavaScript   ";
console.log("trim:", space.trim());
console.log("trim:", "   IT Student   ".trim());


// trimStart()
// Removes spaces from start
let leftSpace = "     Bhavnagar";
console.log("trimStart:", leftSpace.trimStart());
console.log("trimStart:", "   Gujarat".trimStart());


// trimEnd()
// Removes spaces from end
let rightSpace = "Ahmedabad     ";
console.log("trimEnd:", rightSpace.trimEnd());
console.log("trimEnd:", "Surat     ".trimEnd());


// length (property)
// Returns total number of characters
let lengthExample = "Jamani";
console.log("length:", lengthExample.length);
console.log("length:", "Information Technology".length);
