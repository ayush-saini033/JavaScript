const user = {
    username: "Ayush",
    price: 999,

    welcome: function(){
    // this refer to the current context
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
user.welcome()
user.username = "Anil"
user.welcome()

function chai(){
    let name = "Ayush Saini"
    console.log(this)
}
chai()

// **************===>>>**********

// explicit return
const add = (x , y) => {
    return x+y
}

// implict return 
const addTwo = (x , y) => x + y

console.log(addTwo(4,5))

const user1 = () => ({username : "Ayush"})
console.log(user1())