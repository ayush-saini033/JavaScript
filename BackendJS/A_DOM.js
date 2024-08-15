// DOM manipulation
console.log(document)
console.log(document.baseURI)
console.log(document.links)

document.getElementById('bg-black').innerHTML = "<h1>CHAI AUR CODE<h2>"
console.log(document.getElementById('titel'))
console.log(document.getElementById('titel').id)
console.log(document.getElementById('titel').class)
console.log(document.getElementById('titel').className)
console.log(document.getElementById('titel').getAttribute('id'))
console.log(document.getElementById('titel').getAttribute('class'))
console.log(document.getElementById('titel').setAttribute('class','test headinig'))

const titel = document.getElementById('titel')
console.log(titel)
titel.style.backgroundColor = 'green'
titel.style.padding = '15px'
titel.style.borderRadius = '15px'

console.log(titel.textContent)
console.log(titel.innerHTML)
console.log(titel.innerText)

console.log(document.getElementsByClassName('bg-pink'))

// it gives the first h1
console.log(document.querySelector('h1'))
console.log(document.querySelector('#titel'))
console.log(document.querySelector('input[type="password'))

const list = document.querySelector('ul')
const turngreen = list.querySelector('li')

turngreen.style.backgroundColor = "red"
turngreen.style.padding = '5px'
turngreen.style.borderRadius = '15px'

// allList is nodelist
const allList = document.querySelectorAll('li')
console.log(allList)
allList[0].style.backgroundColor = "green"

const myH1 = document.querySelectorAll('h1')

myH1[1].style.backgroundColor = "blue"
myH1[2].style.backgroundColor = "red"

allList.forEach(function (l) {
    l.style.backgroundColor = "green"
    l.style.margin = "5px"
})

console.log(document.getElementsByClassName('list-item'))

const mylist = document.getElementsByClassName('list-item')

// conversion html collection
const myarr = Array.from(mylist)
console.log(myarr)

myarr.forEach(function(li) {
    li.style.color = "orange"
})