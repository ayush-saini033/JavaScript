// setInterval(function(){
//     console.log("Ayush",Date.now())
// })

const sayDate = function(str){
    console.log(str, Date.now());
}

let interval

document.querySelector('#stop').addEventListener('click',function(){
    console.log("Stopped")
    clearInterval(interval)
})

document.querySelector('#start').addEventListener('click',function(){
    interval = setInterval(sayDate, 1000, "hi")
    console.log("Start")
})


