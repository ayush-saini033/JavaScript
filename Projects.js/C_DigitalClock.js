// const clock = document.querySelector('#clock')
const clock = document .getElementById('clock')


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)

console.log("object")