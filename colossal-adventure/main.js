/*
I wanted to add the option to equip a new item from user inventory, 
by selecting the coresponding number. 
Also, add chance of items breaking on attacks.
*/
//CONSTANTS: ///////////////////////////////////////////////////////////
const readline = require('readline-sync');
const readlineSync = require('readline-sync');

const crobar = {name: "Crobar", dmgMin: 10, dmgMax: 30}
const hands = {name:"Hands", dmgMin: 1, dmgMax: 10}

const user = {name:"", day: 1, health: 100, weapon: hands, inventory:[], location:{}, restart: true, highScore: 0, combat: false}

const bandage = {name: "Bandage"}
const bacon = {name: "Fistful of Bacon"}
const items = [bacon, bandage, crobar]

const locations = [{type: "Hotel", description: "are in a Hotel. There is not much here."}, {type: "Hardware Store", description: "are in a Hardware Store. There are Tools on the shelves."}, {type: "Hospital", description: "are in a Hospital. It's creepy here."}]
const zombies = [{name: "Crawler", health: 10, dmgMin: 10, dmgMax: 20}, {name: "Shambler", health: 20, dmgMin: 20, dmgMax: 30}, {name: "Brute", health: 30, dmgMin: 30, dmgMax: 50}]

//FUNCTIONS: ///////////////////////////////////////////////////////////
function print() {
    console.log(`==============================================================================`)
    console.log(`     NAME:[${user.name}]   HEALTH: [${user.health}%]   DAY: [${user.day}]`)
    console.log(`INVENTORY:[${user.inventory.length} items]   WEAPON: [${user.weapon.name}]   `)
    console.log(` LOCATION:[You ${user.location.description}]`)
    console.log(`==============================================================================`)
    console.log(`['W'=Walk to next location, 'P'=Print status]\n`)
    if (user.inventory.length < 1) {
        console.log(`You have no items in your inventory.\n`)        
    } else {
        console.log(`INVENTORY:`)
        for (var i = 0; i < user.inventory.length; i++) {
            console.log(`${i + 1}. ${user.inventory[i].name}`);
            let itemOptions = []
            itemOptions.push(user.inventory[i]) 
            // console.leg(`item Options = ${itemOptions[i]}`)
        }       
        console.log('')
        // key = readlineSync.keyIn(``,{hideEchoBack: true, mask: '', limit: itemOptions});
        // for (var i = 1; i <= itemOptions.length; i++) {
        //     if (key === 'i') {  
        //         user.weapon = itemOptions[i]
        //     } 
        // }
    }
}

function walk() {
    user.day = user.day + 1
    if (user.day > user.highScore) {
        user.highScore = user.day
    }
    user.location = locations[Math.floor(Math.random()*locations.length)]
    console.log(`You walk to the ${user.location.type} nearby.\n`)

    //fight encounter 25% chance, fight loop.
    randomEncounter()
}

function randomEncounter() {
    if (Math.random() * 100 < 25) {
        let zombie = zombies[Math.floor(Math.random()*zombies.length)]
        console.log(`You have encountered a Zombie ${zombie.name}`);
        console.log(`   It's coming right for you!\n`)
        user.combat = true
        do {
            console.log(`==============================================================================`)
            console.log(`     NAME:[${user.name}]   HEALTH: [${user.health}%]`)
            console.log(`==============================================================================`)
            key = readlineSync.keyIn(`['A'=Attack,'R'=Run]\nWhat will you do?\n`,{hideEchoBack: true, mask: '', limit: 'ar'});
            if (key === 'a') {
                attack(zombie)
            } else if (key === 'r') {
                run(zombie)
            }
            if (user.health < 1) {
                user.combat = false
            }
        } while (user.combat === true)
    }
}
        
function run(zombie) {
    console.log(`You try to run!`)
    if (Math.random() * 100 < 50) {
        console.log(`    You have escaped the Zombie!\n`);
        user.combat = false
    } else {
        console.log(`    You couldn't escape..`)
        let damage = attackDamage(zombie.dmgMin, zombie.dmgMax)
        console.log(`    Zombie does ${damage}% Damage to the You!\n`)
        user.health = user.health - damage
    }
}

function attack(zombie) {
    console.log(`You try to attack with your ${user.weapon.name}!`)
    let damage = attackDamage(user.weapon.dmgMin, user.weapon.dmgMax)
    console.log(`   You do ${damage}% Damage to the Zombie!\n`)
    zombie.health = zombie.health - damage
    if (zombie.health > 0) {
        console.log(`The Zombie ${zombie.name} attacks you!`)
        let damage = attackDamage(zombie.dmgMin, zombie.dmgMax)
        console.log(`   Zombie does ${damage}% Damage to the You!\n`)
        user.health = user.health - damage
    } else {     
        console.log(`You've defeated the Zombie!`)   
        if (user.health < 100) {
            console.log(`   You manage to rip up some of their clothing to bandage yourself up with.`)
            if (user.health < 50) {
                user.health = 50
            } else {
                user.health = 100
            }
        }  
        let item = items[Math.floor(Math.random() * items.length)]
        console.log(`   You found a ${item.name} on them.\n`);
        user.inventory.push(item)
        user.combat = false
        print();
    }
}

function attackDamage(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Intro ///////////////////////////////////////////////////////////
console.log(`\n=================================================================`)
console.log(`=================================================================\n`)
console.log(`               ===================================`)
console.log(`                            Theo's`)
console.log(`                     Zombie Survival Game`)
console.log(`                              --`)
console.log(`                    "Good Luck, Have Fun!"`)
console.log(`               ===================================\n`)
readlineSync.keyIn(`                    PRESS ANY KEY TO START\n                              `,{hideEchoBack: true, mask: ''})

//Main loop ///////////////////////////////////////////////////////////
do {
    user.health = 100
    console.log(`=================================================================`)
    console.log(`=================================================================\n`)
    if (user.highScore > 1) {
        console.log(`                    ----------------------`)
        console.log(`                    [HIGH SCORE]: ${user.highScore} Days`)
        console.log(`                    ----------------------\n`)
    } 
    user.name = readline.question(`       (VOICE): "What is your name?"\n\n            --> `);
    console.log(``)
    console.log(`------------------------------------------------------------------------------\n`)
    console.log(`       (VOICE): "${user.name},`)
    console.log(`                 You will not survive this.`)
    console.log(`                 This is the story of how you die.`)
    console.log(`                 How long can you Survive?"\n`)
    readlineSync.keyIn(`                    PRESS ANY KEY TO START\n                              `,{hideEchoBack: true, mask: ''})
    user.location = {type:"House", description:"wake up in a House with only the memory of your name.", containers: 2}
    print();

    //Game Loop
    do { 
        key = readlineSync.keyIn(``,{hideEchoBack: true, mask: '', limit: 'wp'});
        if (key === 'w') {
            walk()
        // } else if (key === 's') {
        //     console.log(`${user.name} searches the ${user.location.type} for loot.\n`)
        //     //run function for search/add item to inventory.
        //     user.inventory.push(crobar)
        } else if (key === 'p') {
            print()
        }
        
    } while (user.health > 0) 

    //Death, play again? 
    user.weapon = hands
    user.inventory =[]
    console.log(`==============================================================================\n`)
    console.log(`       (VOICE): oh no ${user.name}, you've died..`)
    console.log(`                You only survived ${user.day} days..\n`)
    key = readlineSync.keyIn(`                Play Again? Y/N\n`,{hideEchoBack: true, mask: '', limit: 'yn'});
        if (key === 'y') {
            console.log(`            --> Yes!\n`)
        } else if (key === 'n') {
            console.log(`            --> No!\n`)
            console.log(`==============================================================================`)
            console.log(`==============================================================================\n`)
            user.restart = false
        } 
} while (user.restart === true)
console.log(`Good Bye!\n`)
// END ///////////////////////////////////////////////////////////