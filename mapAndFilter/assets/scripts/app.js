console.log("JS Connected!");

let users = ["shravan", "seema", "manoj", "manjeet", "suraj"];


// map
// filter

// {} => blocks

// step 1 syntax
// users.map(item =>  {
//   console.log(item)
// })

// step 2 syntax
// users.map((item,index) =>  {
//   let list = document.createElement("li")
//   list.innerHTML = item

//   list.style.backgroundColor ="red"
//   list.style.marginBottom ="20px"
//   list.style.fontSize ="20px"
//   list.style.color ="white"
//   list.style.padding ="30px"

//   document.querySelector("ul").appendChild(list)
// })

// FILTER

// let newUsers = users.filter((item) => item.includes("see"));

let usersObj = [{ name: "shravan"}, { name: "manjeet" }];

let newUsers = usersObj.filter((item) => item.name.includes("shravan"));

// let newUsers = users.filter(item => item === "shravan")
console.log(users);
console.log(newUsers);

// loops => while,do while,for,for each
// for(let index = 0; users.length > index; index++ ){
//   console.log(users[index],index)
// }

// let index = 0;
// while(users.length === index){
//   console.log(users[index],index)
//   index++
// }

// let index = 0;
// do {
//   console.log(users[index],index)
//   index++
// } while (users.length === index);

// step 1 => index => 0 => index+1 => "shravan"
// step 2 => index => 1 => index+1 => "seema"
// step 2 => index => 2 => index+1 => "manoj"
// step 2 => index => 3 => index+1 => "manjeet"
// step 2 => index => 4 => index+1 => "suraj"
// step 2 => index => 5 => =>>>>>>
