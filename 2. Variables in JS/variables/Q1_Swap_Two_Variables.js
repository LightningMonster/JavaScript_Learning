// Q1. Swap Two Variables
// Write a program to swap the values of two variables a and b using a third variable.

// ➡️ Example:
// Input: a = 5, b = 10
// Output: a = 10, b = 5

let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);

//swapping using a third variable
let temp = a;
a = b;
b = temp;

console.log("After swapping: a =", a, ", b =", b);