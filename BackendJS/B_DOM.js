const parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.children)
console.log(parent.children[1])
console.log(parent.children[1].innerHTML)
console.log(parent.children.length)
for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = 'orange'
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

const dayone = document.querySelector('.day')
console.log(dayone)
console.log(dayone.parentElement)
console.log(dayone.nextElementSibling)
console.log('Nodes: ',parent.childNodes)
