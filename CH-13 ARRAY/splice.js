let cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda", "Kia", "Ford"];

console.log("before splice", cars.length);


cars.splice(3, 0, "Hyundai");

console.log("added ", cars);


cars.splice(5, 1, "Tesla");

console.log("replace ", cars);


cars.splice(4, 2);

console.log("remove ", cars);

console.log("after splice", cars.length);