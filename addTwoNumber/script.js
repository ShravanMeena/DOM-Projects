console.log("JS FILE CONNECTED!!!!")

const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const output = document.querySelector((".output"))

const addBtn = document.querySelector(("button"))

addBtn.addEventListener("click", function () {
    const sum = parseInt(num1.value) + parseInt(num2.value)
    output.textContent = sum;
})