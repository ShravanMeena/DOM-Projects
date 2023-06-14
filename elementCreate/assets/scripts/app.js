console.log("chalaa me")

let button = document.querySelector("button")
let cardContainer = document.querySelector(".card-container")

let titleVal = document.querySelector("#title")
let descVal = document.querySelector("#desc")


button.addEventListener("click",addNewBox)



function addNewBox(){
    const card = document.createElement("div") // element create (div,h1,p,li)
    card.classList.add("card")
    
    const title = document.createElement("h1")
    title.innerHTML = titleVal.value

    const description = document.createElement("p")
    description.innerHTML = descVal.value
    
    card.appendChild(title)
    card.appendChild(description)

    cardContainer.appendChild(card)
}

// step - 1: <div></div>
// step - 2: <div class="card"></div>
// step - 3: <h1></h1>
// step - 4: <h1> { titleVal.value } </h1>
// step - 5: <p>  </p>
// step - 6: <p> {descVal.value} </p>
// step - 7: <div>  <h1> { titleVal.value } </h1> </div>
// step - 8: <div>  <h1> { titleVal.value } </h1> <p> {descVal.value} </p> </div>
// step - 9:  <div class="card-container"> <div>  <h1> { titleVal.value } </h1> <p> {descVal.value} </p> </div></div>