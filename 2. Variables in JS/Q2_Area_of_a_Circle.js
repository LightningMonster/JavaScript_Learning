// Q2. Area of a Circle
// Write a program that takes the radius of a circle as input and stores the value of π using a constant variable. 
// Then calculate and print the area.

// ➡️ Formula: area = π × r²
// Use const pi = 3.14;

const pi = 3.14; 
let radius = 5; 
let area = pi * radius * radius;
console.log("The area of the circle with radius " + radius + " is: " + area);