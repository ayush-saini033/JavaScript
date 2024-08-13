// singleton
// object literals

const symbol = Symbol("Key1")

const jsuser = {
    name: "Ayush",
    "Full name": "Ayush saini", // can not accessed by the dot operator
    [symbol]: "mykey1",
    age: 19,
    branch: "Civil",
    Location: "Alwar",
    isloggedIn: false
}
console.log(jsuser.name)
console.log(jsuser["branch"])
console.log(jsuser["Full name"])
console.log(jsuser.symbol)
console.log(jsuser[symbol])
console.log(symbol)

// for restriction on change 
// Object.freeze(jsuser)
// modified value does not propagate

jsuser.greeting = function(){
    console.log("Hello js user")
}
jsuser.greetingTwo = function(){
    // it is called string inter manipulation
    console.log(`Hello ${jsuser.name}`)
}
jsuser.greetingTwo = function(){
    console.log(`My name is ${this.name}`)
}
console.log(jsuser.greeting())
jsuser.greetingTwo()