function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) can't accessed
    two()
}
one()


if(true){
    const username = "Anil"
    if(username === "Anil"){
        console.log(username)
    }
}

// ********Hosting**********

// it does not gives the error
addone(5)
function addone(num){
    return num+1
}
// it gives the error
// addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)