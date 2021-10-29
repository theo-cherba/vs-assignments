//CONSTANTS:
const goombas = document.getElementById("goombas")
const goombasTotal = document.getElementById("goombasTotal")
const bobombs = document.getElementById("bob-ombs")
const bobombsTotal = document.getElementById("bob-ombsTotal")
const cheepCheeps = document.getElementById("cheep-cheeps")
const cheepCheepsTotal = document.getElementById("cheep-cheepsTotal")

//EVENT LISTENERS:
goombas.addEventListener('change', updateGoombas); 
function updateGoombas(e) {    
    goombasTotal.textContent = `Total Price = ${e.target.value * 5} Coins`;
}

bobombs.addEventListener('change', updateBobombs); 
function updateBobombs(e) {    
    bobombsTotal.textContent = `Total Price = ${e.target.value * 7} Coins`;
}

cheepCheeps.addEventListener('change', updateCheepcheeps); 
function updateCheepcheeps(e) {    
    cheepCheepsTotal.textContent = `Total Price = ${e.target.value * 11} Coins`;
}

