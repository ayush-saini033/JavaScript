const arr = [1,2,3,4,5]

console.log(arr[0])
// array makes the shallow copy it means share the same reference
// Deep copy means the does not shre the same reference

const names = ['Anil','Ayush','Krishn Kant']

const newArr = new Array(6,7,8,9)
console.log(newArr[1])

// Array methods
newArr.push(10)
newArr.push(11)
newArr.pop()
console.log(newArr)

// insert at first
newArr.unshift(5)
console.log(newArr)

// remove from first
newArr.shift()
console.log(newArr)

console.log(newArr.includes(9))
console.log(newArr.indexOf(9))

const Arr1 = newArr.join()
console.log(Arr1)
console.log(typeof Arr1)

// Slice , Splice

console.log("A ",newArr)
const Arr2 = newArr.slice(1,3)
console.log(Arr2)

console.log("B ",newArr)

const Arr3 = newArr.splice(1,3)
console.log(Arr3)
console.log("B ",newArr)