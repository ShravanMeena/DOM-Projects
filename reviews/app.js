console.log("conncted..")

var user = ["https://vannilla-js-basic-project-15-slider.netlify.app/img-1.jpeg","https://images.pexels.com/photos/17239929/pexels-photo-17239929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]

// console.log(user[user.length - 1]) =>>> last item of array

var prevBtn = document.querySelector(".previous")
var nextBtn = document.querySelector(".next")
var author = document.querySelector("img")
var index = 0

function newuser(){
    author.src= user[index]
    prevBtn.style.display = "none"
}

window.addEventListener("DOMContentLoaded", newuser())

prevBtn.addEventListener("click",function(){
    // index = index - 1;
    index--
    author.src = user[index]
    nextBtn.style.display = "block"
    if(index === 0){
        prevBtn.style.display = "none"
    }
})


nextBtn.addEventListener("click", function(){
    index++
    author.src = user[index]

    nextBtn.style.display = "block"
    prevBtn.style.display = "block"

    if(index > user.length - 2){
        nextBtn.style.display = "none"
    }
})