const user = {
    username: "Ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        console.log("Got user details from database")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetail())

// Constructor function
// new is used to create the new context
function User(username, logincount, islogedin){
    this.username = username
    this.loginCount = logincount
    this.islogedin = islogedin

    this.greeting = function(){
        console.log(`Welocme ${this.username}`)
    }
    return this
}

// userx is override by the usery without constructor keyword (new)

const userx = User("Suhani",4,true)
const usery = User("Kritika",6,false)

console.log(userx)
userx.greeting()

const userone = new User("Ayush",9,true)
console.log(userone)

const usertwo = new User("Anil",2,false)
console.log(usertwo)

// due to new keyword an empty instance or object is created
// due to new keyword a constructor is called
