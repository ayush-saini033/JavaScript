const males = ["Ayush" ,"Anil", "KrishnKant"]

const females = ["Suhani", "Angel", "Shagun"]

males.push(females)

console.log(males)
console.log(males[3][2])

males.pop()

const next = males.concat(females)
console.log(next)

// spread
const names = [... males, ...females]
console.log(names)

const anotherArr = [1,2,3,4,[4,5,6,7,[8,9,10]]]

// 3 is the range of the depth or nested array
const useable = anotherArr.flat(3)
console.log(useable)

console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush"))
console.log(Array.from({name: "Ayuhs",age: 19}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))