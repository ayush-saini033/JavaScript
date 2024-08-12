let name1 = "Ayush"
// name2 having the copy of name1
let name2 = name1
name1 = "Rahul"
console.log(name2)

let user1 = {
    name: "Ayush",
    age: 18
}

// heap gives the memory reference
let user2 = user1
user2.name = "Rahul"

console.log(user1.name)