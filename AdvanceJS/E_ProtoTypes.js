let name = "Ayush     "

console.log(name.length);

let arr = ["Ayush","suhani","kritika"]

let power = {
    Ayush: "study",
    suhani: "innocent",
    kritika: "beautiful",

    getAyushPower: function(){
        console.log(`Ayush ha power ${this.Ayush}`)
    },

    getsuhaniPower: function(){
        console.log(`Subanhi has power ${this.suhani}`)
    },

    getKritikaPower: function(){
        console.log(`Kritika has power ${this.kritika}`)
    }
}

Object.prototype.ayush = function(){
    console.log(`Object has Ayush prototype`)
}
power.ayush()
arr.ayush()
power.getAyushPower()

Array.prototype.heykritika = function(){
    console.log('having the kritika power')
}

arr.heykritika()
// power.heykritika()

// inheritance

const user = {
    name: "Chai",
    email: "google.com"
}

const teacher = {
    makevideo: true
}

const teachingSupport =  {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

// true length

let userOtherName = "Ayush saini    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

console.log(userOtherName.trueLength())
console.log("Ayush Anil Krishn     ".trueLength())