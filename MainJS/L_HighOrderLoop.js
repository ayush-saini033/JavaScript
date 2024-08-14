// for of loop

const arr = [1,2,3,4]
for (const num of arr){
    console.log(num)
}

const name = "Ayush"
for(const char of name){
    console.log(char)
}

// Maps 
// Map is not iterable
const map = new Map()
map.set('IN',"India")
map.set("Fr","France")
map.set("USA","America")

for(const [key,value] of map){
    console.log(key, ':-', value)
}

// Object is not iterable
const myObject = {
    'game1': "Tempele Run",
    "game2": "Candy crush"
}
// for in loop gives the keys or indexes
for(const key in myObject){
    console.log(key, ":-" ,myObject[key])
}

const arr1 = [12,13,14,15]
for(const key in arr1){
    console.log(key, ":-", arr1[key])
}

// For each loop

const arr2 = ["Ayush","Anil","Angel"]

// call back function does not have name
arr2.forEach( function (item) {
    console.log(item)
})
console.log("*************************")
// By arrwo function and call back function
arr2.forEach( (item) => {
    console.log(item)
} )
console.log("*************************")
function printMe(item){
    console.log(item);
}

arr2.forEach(printMe)

console.log("*************************")

arr2.forEach( (item, index, arr ) => {
    console.log(index, item, arr)
})

const coding = [
    {
        lang: "java",
        file: "java"
    },
    {
        lang: "C++",
        file: "cpp"
    },
    {
        lang: "JavaScript",
        file: "js"
    }
]

coding.forEach( (item) => {
    console.log(item.lang,":-",item.file)
})