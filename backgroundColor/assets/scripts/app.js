// const btn = document.querySelector("button")

// let colors = ["red","green","blue","pink","yellow","orange","gray"] //ARRAY 
//              // 0     1       2      3       4        5      6

// function randomNumberGenerator() {
//     return Math.floor(Math.random() * colors.length)
// }

// btn.addEventListener("click", changeBGColor)

// // background color change
// function changeBGColor(){
//     let randomNumber = randomNumberGenerator() 

//     const bgColor = colors[randomNumber]

//     document.body.style.backgroundColor = bgColor
// }

let colors = ["red","green","blue","pink","yellow","orange","gray"] //ARRAY 

// for loop
// index++ => +1


for(let index = 0; colors.length > index; index++){
    console.log(colors[index])
    // console.log(index)
}

// index = 4 => seema, 4
// index = 5 => seema, 5