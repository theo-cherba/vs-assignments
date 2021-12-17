//CONSTANTS:
const clickTotal = document.getElementById("clickTotal")

//CLICK TOTAL:
let clicks = localStorage.getItem("clicks")
if (isNaN(clicks)) {
    clicks = 0
    }
clickTotal.innerHTML = `${clicks} clicks!`

//30 SECOND COUNTDOWN:
let clock = document.getElementById("clock");
let timeLeft = 30
let counting = true
let intervalId = setInterval(function(){
    timeLeft = countdown(timeLeft)
    clock.innerHTML = `${timeLeft} seconds left!`
}, 1000)
setTimeout(function(){
    counting = false
    clearInterval(intervalId)
    clock.innerHTML = `Time is Up!`
}, 30000)

//CLICK COUNTER:
document.body.addEventListener("click", function(event){
    event.preventDefault;
    if (counting === true) {
    clicks = +clicks + 1 
    localStorage.setItem("clicks", clicks)
    clickTotal.innerHTML = `${clicks} clicks!`
    }
});

//FUNCTIONS:
function countdown(timeLeft) {
    timeLeft = timeLeft - 1
    return timeLeft
}
