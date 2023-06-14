// selector 
// initialize

let num = document.querySelector("#txtnum");
let spanResult  =  document.querySelector("#spanResult");
let btn  =  document.querySelector("button");

btn.addEventListener("click", checkOddEven)

function checkOddEven(){
    const value = num.value

    // % (---) => 14%5 => 4
    // / (divide) => 14/5 => 2

    if (parseInt(value % 2) === 0) {
        spanResult.innerHTML = value + " is even number";
      } else {
        spanResult.innerHTML = value + " is odd number";
      }
}