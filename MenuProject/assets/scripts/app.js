
// items
let menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

// categories
var all = document.querySelector('#all')
var breakfast = document.querySelector('#breakfast')
var lunch = document.querySelector('#lunch')
var snacks = document.querySelector('#shakes')
var dinner = document.querySelector('#dinner')

// main container
var sectionCenter = document.querySelector('.section-center')

let displayItems = []

// console.log('NOT FULLY LOADED')

// first time pag load 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    menu.map(item => createNewElement(item))
});


breakfast.addEventListener("click", function(){
     sectionCenter.innerHTML = ""
     displayItems = menu.filter(item => item.category === "breakfast")
     displayItems.map(item => createNewElement(item))
} )

lunch.addEventListener("click", function(){
    sectionCenter.innerHTML = ""
     displayItems = menu.filter(item => item.category === "lunch")
     displayItems.map(item => createNewElement(item))
} )

snacks.addEventListener("click", function(){
    sectionCenter.innerHTML = ""
     displayItems = menu.filter(item => item.category === "shakes")
     displayItems.map(item => createNewElement(item))
} )

dinner.addEventListener("click", function(){
    sectionCenter.innerHTML = ""
     displayItems = menu.filter(item => item.category === "dinner")
     displayItems.map(item => createNewElement(item))
})

all.addEventListener("click", function(){
    sectionCenter.innerHTML = ""
     menu.map(item => createNewElement(item))
})

function createNewElement(item){
    let article = document.createElement("article")
    article.classList.add("menu-item")
    article.style.border = "2px solid gray"
    article.style.margin = "5px"

    let div = document.createElement("div")
    div.classList.add("menu-info")

    let header = document.createElement("header")
    let title = document.createElement("h4")
    title.textContent = item.title

    let price = document.createElement("h4")
    price.classList.add("price")
    price.textContent = item.price

    let p = document.createElement("p")
    p.classList.add("item-text")
    p.textContent = item.desc

    article.appendChild(div)
    div.appendChild(header)
    div.appendChild(p)
    header.appendChild(title)
    header.appendChild(price)

    sectionCenter.appendChild(article)

}

