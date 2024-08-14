const balance = 500;

// it is bad pratice
if(balance > 400) console.log("You can buy this"),console.log("Thank you");

const month = 3

switch(month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("Not avilable")
}

// Falsy vlaues -> 0,false,"",-0,BingInt 0n,null,undefined,NaN
// Truth values -> "0","false"," ",[],{},function(){} empty function,

// for check the array and objkects

const arr = [];

if(arr.length == 0){
    console.log("Array is empty")
}

const myObj = {}

if(Object.keys(myObj).length == 0){
    console.log("Object is empty")
}
console.log(0 == '')
console.log(0 == false)

// Nulish Coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 14
console.log(val2)

let vla3 = undefined ?? "Ayush"
console.log(vla3)

let val4 = null ?? 12 ?? undefined
console.log(val4)

// ternary operator

const iceprice = 100
iceprice >= 90 ? console.log("Can buy this") : console.log("Not buy this")
