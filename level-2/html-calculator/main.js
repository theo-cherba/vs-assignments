//CONSTANTS:
const addButton = document.getElementById("addButton")
const addOutput = document.getElementById("addOutput")
const subtractButton = document.getElementById("subtractButton")
const subtractOutput = document.getElementById("subtractOutput")
const multiplyButton = document.getElementById("multiplyButton")
const multiplyOutput = document.getElementById("multiplyOutput")

//ADD
addButton.addEventListener("click", function(event) {
    event.preventDefault()
    let a = document.getElementById("addInput1")
    let b = document.getElementById("addInput2")
    let results = add(a.valueAsNumber, b.valueAsNumber)
    a.value = ``
    b.value = ``
    if (isNaN(results)) results = 0;
    addOutput.innerText = `= ${results}`
})

//SUBTRACT
subtractButton.addEventListener("click", function(event) {
    event.preventDefault()
    let a = document.getElementById("subtractInput1")
    let b = document.getElementById("subtractInput2")
    let results = subtract(a.valueAsNumber, b.valueAsNumber)
    a.value = ``
    b.value = ``
    if (isNaN(results)) results = 0;
    subtractOutput.innerText = `= ${results}`
})

//MULTIPLY
multiplyButton.addEventListener("click", function(event) {
    event.preventDefault()
    let a = document.getElementById("multiplyInput1")
    let b = document.getElementById("multiplyInput2")
    let results = multiply(a.valueAsNumber, b.valueAsNumber)
    a.value = ``
    b.value = ``
    if (isNaN(results)) results = 0;
    multiplyOutput.innerText = `= ${results}`
})

//FUNCTIONS:
function add(a, b) { 
    return a + b
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}