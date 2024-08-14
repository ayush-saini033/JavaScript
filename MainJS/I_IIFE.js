// imediately invoked function expression

// used semicolon for terminate the function
(function chai(){
    // named IIFE
    console.log("DB connected")
})();

// first parantesis for the function and next parantesis for the execution
// for remove the global scope polution

(() => {
    // Unname IIFE
    console.log("DB connected Two")
})();

((name) => {
    console.log(`My name is ${name}`)
})("Ayush");