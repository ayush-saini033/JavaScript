// document.getElementById('owl').onclick = function(){
//     alert('owl clicked')
// }

// best Approach

// event bubbling default argument is false
document.getElementById('owl').addEventListener('click', function(e){
    console.log(e)
}, false)

// events:- type, timeStamp, defaultPrevnted, srcElement, currentTarget, target
// altkey, shiftkey, ctrlkey, keycode
// clientx, clienty, screenx, screeny

// event propagation

document.getElementById('images').addEventListener('click', function(e){
    console.log('clicked inside the ul')
}, false)

// event bubbling :- from bottom to top
document.getElementById('owl').addEventListener('click',function(e){
    console.log('owl clicked')
}, false)

// event capturing :- from top to bottom
document.getElementById('japan').addEventListener('click',function(e){
    console.log('japan clicked')
}, true)

// stoping the propagation
// default value is false
document.getElementById('photoshop').addEventListener('click',function(e){
    console.log('photoshop clicked')
    e.stopPropagation()
})

// prevent default
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    console.log("google clicked")
    e.stopPropagation()
},false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode)
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id)
        let removeIt  = e.target.parentNode
        removeIt.remove()
        // removeIt.parentNode.removeChild(removeIt)
    }
})