const name = "Ayush saini"

function syaMyName(){
    console.log(`My name is ${name}`)
}

function add(n,m){
    return n + m
}
syaMyName()
console.log(add(4,5))

// default value
function loginUser(username = "Sam"){
    return `login user is ${username}`
}

// Ayush override the sam
console.log(loginUser("Ayush"))

// Rest operator
function calculateCartPrice(val1, val2,...num1){
    console.log(val1)
    console.log(val2)
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 700, 900))

const user = {
    username: "Ayush",
    price: 199
}

function handleObject(anyObject){
    console.log(`usename is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "Anil",
    price: 400
})

const arr = [200,300,400,500]

function secondValue(arr){
    return arr[1]
}

console.log(secondValue(arr))