// Q1. Scope Check
// What happens when you declare a variable using var inside a block (if, for, etc.)?
// How is it different from using let or const in the same block?

function testScope() {

    var a = 1; 
    let b = 2; 
    const c = 3; 
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); // ✅ Accessible: var is function-scoped
    console.log(b); // ❌ Error: let is block-scoped
    console.log(c); // ❌ Error: const is block-scoped
}
testScope();
