console.log("conncted..")

var user = ["seema","shravan","manoj","suraj"]


// console.log(user[user.length - 1]) =>>> last item of array

var prevBtn = document.querySelector(".previous")
var nextBtn = document.querySelector(".next")
var author = document.querySelector("h2")
var index = 0

function newuser(){
    author.textContent= user[index]
}

window.addEventListener("DOMContentLoaded", newuser())

prevBtn.addEventListener("click",function(){
    // index = index - 1;
    index--

    console.log(index, "UPER-PREV");
    if(index < 0){
        index = user.length - 1
    }
    console.log(index, "NEECHE-PREV");
    author.textContent = user[index]

})


nextBtn.addEventListener("click", function(){
    // index = index + 1;
    index++
    
    // CLICK 01 => OLDindex = 0 => index ==> 1
    // CLICK 02 => OLDindex = 1 => index ==> 2
    // CLICK 03 => OLDindex = 2 => index ==> 3
    // CLICK 04 => OLDindex = 3 => index ==> 4

    console.log(index, "UPER-NEXT");

    if(index >= user.length){
        index = 0
    }

    console.log(index, "NEECH-NEXT");
    author.textContent = user[index]

})