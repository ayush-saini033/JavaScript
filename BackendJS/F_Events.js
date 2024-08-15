setTimeout(function(){
    console.log("Ayush")
}, 2000)

const sayName = function(){
    console.log(`my name is Ayush`)
}

// only giv ethe name of function as reference , not executed
setTimeout(sayName,2000)

const changeText = function(){
    document.querySelector('h1').innerHTML = "Bet JS series"
}

const changeme = setTimeout(changeText,4000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeme)
    console.log('Stopped')
})