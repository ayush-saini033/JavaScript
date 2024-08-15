class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()}Ayush`
    }
    set password(value){
        this._password = value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
}

const hitesh = new User("hitesh@.ai","abc")
console.log(hitesh.password)
console.log(hitesh.email)