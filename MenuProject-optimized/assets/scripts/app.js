const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

// DOM => Loaded => MENU ITEMS => sare ke sare items (FOOD) deekha denge

window.addEventListener("DOMContentLoaded", function(){
    showAllItems(menu)
    showAllCategories()
    getAllButtons()
})


function showAllItems(data){
    let displayDishes = data.map((item) =>  {
        return `<article class="menu-item">
                    <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">₹${Math.floor(item.price*100)}</h4>
                    </header>
                    <p class="item-text">
                       ${item.desc}
                    </p>
                    </div>
               </article>`
    })

    displayDishes = displayDishes.join("")
    sectionCenter.innerHTML = displayDishes
}

function showAllCategories(){
  let categories = menu.reduce(
    function(initialCategories,item){
    // METHOD 01:
    if(initialCategories.includes(item.category)){
        return initialCategories
    }else{
      initialCategories.push(item.category)
    }
    // METHOD 02: 
    // if(!initialCategories.includes(item.category)){
    //   initialCategories.push(item.category)
    // }
    return initialCategories;
  }, ["all"])

  let categoriesDisplay = categories.map((category) =>  {
    return `<button class="filter-btn" type="button" data-id=${category}> ${category} </button>`
})

categoriesDisplay = categoriesDisplay.join("")
btnContainer.innerHTML = categoriesDisplay

// let btns = document.querySelectorAll(".filter-btn")

// btns.forEach(btn => {
//   console.log(btn);
// });

}

function getAllButtons(){
  let btns = document.querySelectorAll(".filter-btn")
  
    btns.forEach(btn => {
      btn.addEventListener("click",function(e){

        let category = e.target.dataset.id

        let filteredData = menu.filter(item => item.category === category)
        if(category === "all"){
        showAllItems(menu)
        }else{
          showAllItems(filteredData)
        }
      })
    });
}











// !
// let a = true
// console.log(!a);
// console.log(a);

// includes
// let str = "satyanarayan meena"
// console.log(str.includes("yan"));

// PUSH
// let a = ["ram"]
// a.push("seeta")
// a.push("lakshman")
// a.unshift("seeta")

// POP
// let a = ["ram","seeta"]
// // a.pop()
// a.shift()

// console.log(a);