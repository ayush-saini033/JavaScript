const coding = ["Java","Python","C++","Rubby"]

// for eaach does not return the value

const values = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(values)

const myNum = [1,2,3,4,5,6,7,8,9] 
let NewNum = myNum.filter( (num) => num > 4)

console.log(NewNum)

let newNums = myNum.filter( (num) => {
    return  num > 4
})

console.log(newNums)

const arr = []

myNum.forEach( (num) => {
    if(num > 4){
        arr.push(num)
    }
} )

console.log(arr)

const books = [
    {titel: "Book one", gener : "fiction"},
    {titel: "Book two", gener : "Non-fiction"},
    {titel: "Book three", gener: "Science"}
];

let userBooks = books.filter( (bk) => bk.gener === "fiction")
console.log(userBooks)

userBooks = books.filter( (bk) => {return bk.gener === "Science"})
console.log(userBooks)

const numbers = [1,2,3,4,5,6,7,8,9]

const numMap = numbers.map( (num) => num + 10)
console.log(numMap)

// Chaining
const numMap1 = numbers
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)

console.log(numMap1)

// Reduce method

const numReduce = [1,2,3,4,5,6,7,8,9,10]

// (accumlator, cuurentValue) => accumlator + cuurentValue

const myTotal = numReduce.reduce(function (acc, currval){
    return acc + currval
},0)
console.log(myTotal)
// 0 is by default or starting value of accumlator 
const myTotal1 = numReduce.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal1)

const shopping = [
    {
        item : "Java",
        price  : 999
    },
    {
        item : "python",
        price : 888
    },
    {
        item: "ML",
        price: 1200
    }
]
const TotalPrice = shopping.reduce( (acc, item) => item.price + acc ,0)
console.log(TotalPrice)