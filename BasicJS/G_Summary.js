// primitive

// 7 types : String, Number,Boolean, null, undefined, symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

// Java Script is dynamically typed language

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id == anotherId) //false
console.log(id === anotherId) // false

// BigInt
const big = 123321434239585n

const names = ["Ayush","Anil","Krishnkant"]

let myObj = {
    name: "Ayush",
    age: 19
}

const myFunction = function(){
    console.log("Hello Ayush")
}

// object function
console.log(typeof myFunction)

console.log(myObj)
console.log(names)