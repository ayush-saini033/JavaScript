const name = "Ayush"
const roll = 33

console.log(`Hii my name is ${name} and my roll number is ${roll}`)

// it provides the function of strig
// game is object
const game = new String("Temple run")
console.log(typeof game)
console.log(game.__proto__)

console.log(game.length)
console.log(game.toLocaleUpperCase())
console.log(game.toLocaleLowerCase())
console.log(game.charAt(3))
console.log(game.indexOf('m'))

// lat char is not included
const newStr = game.substring(0,4)
console.log(newStr)

// reverse string
const exStr = game.slice(-8,6)
console.log(exStr)

const spaceStr = "    Ayush   ";

console.log(spaceStr.trim() + " Saini")

const url = "https://Ayush.com//20%git.hub"

console.log(url.replace('20%',"_"))
console.log(url.includes("Sundar"))
console.log(game.split('-'))