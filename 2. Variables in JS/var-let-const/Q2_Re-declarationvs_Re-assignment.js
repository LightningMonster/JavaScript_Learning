// Q2. Re-declaration vs Re-assignment
// Which of the following keywords allow:
// Re-declaration?
// Re-assignment?
// Explain the behavior of var, let, and const in both cases.

//var
var x = 10; // Re-declaration allowed
var x = 20; // Re-declaration allowed
x = 30; // Re-assignment allowed
console.log(x); 

//let
let y = 10; // Re-declaration not allowed
//let y = 20; // ❌ Error: Re-declaration not allowed
y = 30; // Re-assignment allowed
console.log(y);

//const
const z = 10; // Re-declaration not allowed
//const z = 20; // ❌ Error: Re-declaration not allowed
//z = 30; // ❌ Error: Re-assignment not allowed
console.log(z); 