let students = ["Pesho", "Gosho", "Stamat", "Mariyka", "Kalinka"];
console.log(students);

students[3] = "Mariya";
console.log(students);

// Get the length of the array
console.log(students.length);

// Get the last element of the array
console.log(students[students.length - 1]);

// Add element at the end of the array
students[students.length] = "Vladi"; // not clean code
console.log(students);

// Add at the end using push method, AKA the clean way :)
students.push("Gaby");
console.log(students);

// Select element on invalid position
console.log(students[100]);

// Set element on non existing position
students[23] = "Yavor";
console.log(students);

// Using invalid index
console.log(students[-1]);
students[-1] = 'ninja'; // bad practice, invalid index
console.log(students[-1]);

// Check if there is an element inside the array
console.log(students.includes("Pesho"));

// Use toString method on array
console.log(students.toString());

// Join elements inside array into string
console.log(students.join(","));

// Turn string to numbers
console.log(students.map(Number));