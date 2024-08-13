const balance = new Number(100)

console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.986
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)

// **************Maths************

console.log(Math.abs(-4)) // 4
console.log(Math.round(4.35)) 
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.2)) // 4

console.log(Math.min(1,2,5,28))
console.log(Math.max(12,34,56,-3))

//Math.Random

// always having the value between 0 and 1
console.log(Math.random())
// add 1 is for avoid the 0 case
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)