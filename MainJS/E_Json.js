const course = {
    courseName : "Java",
    price: "999",
    courseInstructor: "Ayush"
}
const {courseInstructor} = course
console.log(courseInstructor)

// Destructured the syntax
const {courseInstructor: instructor} = course
console.log(instructor)

// {
//     "name": "Hitesh",
//     "price": "free",
//     "courseName": "JavaScript"
// }

[
    {},
    {},
    {}
]