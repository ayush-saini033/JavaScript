class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chaiteacher.com", "033")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof Teacher)