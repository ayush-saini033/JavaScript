// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "#033"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "ayushsaii1910@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Saini"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3)
// {} --> it is the target and it is not compulsory
// obj1,obj2 are source
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

// by spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5)

const user = [
    {
        id: 1,
        email: "ayush@gmail.com"
    },
    {
        id: 2,
        email: "anil@gmail.com"
    }
]
// return the array of keys
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
// converting the entries into the array
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))