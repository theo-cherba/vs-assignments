class player {
    constructor(){
        this.name = ""
        this.totalCoins = 0
        this.status = "Small"
        this.gameActive = true
        this.hasStar = false
    }

    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){
        if (this.hasStar === true){
            this.hasStar = false
            console.log(`Your star protected you!`)
        } else {
            switch(this.status){
            case "Powered Up":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Small"
                break;
            case "Small":
                this.status = "Dead"
                break;
            default:
                console.log(`error with status, gotHit()`)
            }
        }
    }

    gotPowerup(){
        switch(this.status){
            case "Small":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Powered Up"
                break;
            case "Powered Up":
                this.hasStar = true
                console.log(`Congratulations! You got a star!`)
                break;
            default:
                console.log(`error with status, gorPowerup()`)
        }
    }

    addCoin(){
        this.totalCoins += 1
    }
    
    print(){
        if(this.status === "Dead"){
            console.log(`You lost the game! you died!\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nYour final score was ${this.totalCoins}\n\n`);
            console.log(`        <END>`)
            this.gameActive = false
        } else {
            console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
            switch(this.hasStar){
            case true:
                console.log(`You have a star\n\n`) 
                break
            case false:
                console.log(`\n\n`)
                break;
            default:
                console.log(`error with hasStar, print()`)
            }
        }
    }
}



function randomRange() {
    if(newPlayer.gameActive === false){
        clearInterval(game)
    } else {
        let random = Math.floor(Math.random() * 3);
        switch(random){
            case 0:
                newPlayer.gotHit();
                break;
            case 1:
                newPlayer.gotPowerup();
                break;
            case 2:
                newPlayer.addCoin();
                break;
            default:
                console.log(`error with random number, randomRange()`);
        }
        newPlayer.print();
    }
}

console.log(`        <START>\n\n`)
newPlayer = new player()
newPlayer.setName("Luigi")

newPlayer.print()
let game = setInterval(randomRange, 300)




//put a random range fuinction inside a setInterval function, 
//that ends after gameActive = false, then wprints "Your final score was ${totalCoins}"