const readline = require('readline-sync');
const readlineSync = require('readline-sync');

//start, create user name.
const name = readline.question("What is your name? ");
console.log('-------');
console.log(name + ', You find yourself locked in a room.')
console.log('-------');
var idle = true;
var key = false;

//choose actions.
while (idle == true) {
    actions = ['put hand in hole', 'find the key', 'open the door'];
    index = readlineSync.keyInSelect(actions, 'What will you do?');
    var idle = false;

    if (actions[index] == 'put hand in hole') {
        console.log('-------');
        console.log(name + ' has died.');
        console.log('-------');

    } else if (actions[index] == 'find the key') {
        if (key == false) {
            var key = true;
            console.log('-------');
            console.log('you have found the Key!');
            console.log('-------');
            var idle = true;
            //loop back actions.
        } else if (key == true) {
            console.log('-------');
            console.log('you already have the Key..');
            console.log('-------');
            var idle = true;
            //loop back actions.
        }
    } else if (actions[index] == 'open the door') {
        if (key == true) {   
            console.log('-------');
            console.log(name + ' has completed the Escape Room!');
            console.log('-------');
        } else if (key == false) {
            console.log('-------');
            console.log('you need a key for this..');
            console.log('-------');
            var idle = true;
            //loop back actions.
        }
    } 
}