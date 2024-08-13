let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

// Months will start from the 0
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let acuurateDate = new Date(2023,0,23,5,3)
console.log(acuurateDate.toLocaleString())

let newDate = new Date("2023-01-14")
console.log(newDate.toLocaleDateString())

let newDate1 = new Date("01-14-2023")
console.log(newDate1.toLocaleString())

let myTimeSpam = Date.now()
console.log(myTimeSpam) // give in milli second
console.log(newDate.getTime())
// convert into seconds
console.log(Math.floor(Date.now()/1000))

let newDate2 = new Date()
console.log(newDate2)
console.log(newDate2.getMonth())
console.log(newDate2.getDate())
console.log(newDate2.getDay())

let obj = newDate2.toLocaleDateString('default',{
    weekday: 'long',
    month: "2-digit",
    year: "numeric",
    day: "2-digit"
})
console.log(obj)