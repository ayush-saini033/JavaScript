const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)
// PI is the hard code value no one can change

// console.log(Math.PI)
// Math.PI = 5
// Not override
// console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailabl: true,

    orderChai: function(){
        console.log("Chai nahi bani")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name", {
    writable: false,
    enumerable: false
})

// name can not print in loop because enumeration is false

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }

}