function addlang(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addlang("python")
addlang("TypeScript")

// optimal approach

function addOptLang(langName){
    const li = document.createElement('li')
    // const addtext = document.createTextNode(langName)
    // li.appendChild(addtext)
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptLang('Golang')

// Edit the value

const SecondLang = document.querySelector('li:nth-child(2)')
// not a optimal approach
// SecondLang.innerHTML = "Mojo"

// optimal approach
const newli = document.createElement('li')
newli.textContent = "Mojo"
SecondLang.replaceWith(newli)

const langEdit = document.querySelector("li:first-child")
langEdit.outerHTML = '<li>Ecma</li>'

// Remove

const langRemove = document.querySelector('li:last-child')
langRemove.remove()

