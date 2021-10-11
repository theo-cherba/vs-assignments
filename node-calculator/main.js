const readlineSync = require('readline-sync');

//FUNCTIONS:
// adds two numbers and returns the result
function add() {
    return num1 + num2;
}
// multiplies two numbers and returns the result.
function multiply() {
    return num1 * num2;
}
// divides two numbers and returns the result.
function divide() {
    return num1 / num2;
}
// subtracts two numbers and returns the result.
function subtract() {
    return num1 - num2;
}

function results() {
    var operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div. ');
    if (operation == 'add') {
        console.log('add ' + num1 + ' and ' + num2 + '?')
        console.log('The result is: ' + add()); 
    } else if (operation == 'mul') {
        console.log('multiply ' + num1 + ' and ' + num2 + '?')
        console.log('The result is: ' + multiply()); 
    } else if (operation == 'div') {
        console.log('divide ' + num1 + ' and ' + num2 + '?')
        console.log('The result is: ' + divide()); 
    } else if (operation == 'sub') {
        console.log('subtract ' + num1 + ' and ' + num2 + '?')
        console.log('The result is: ' + subtract()); 
    } else {
        console.log('O.o ?')
        results();
    }
}

//MAIN SCRIPT:
// ask for numbers & operation, then return the result.
console.log('Calculator says,');
var num1 = readlineSync.questionInt('Please enter your first number. ');
var num2 = readlineSync.questionInt('Please enter your second number. ');
var operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div. ');
if (operation == 'add') {
    console.log('add ' + num1 + ' and ' + num2 + '?')
    console.log('The result is: ' + add()); 
} else if (operation == 'mul') {
    console.log('multiply ' + num1 + ' and ' + num2 + '?')
    console.log('The result is: ' + multiply()); 
} else if (operation == 'div') {
    console.log('divide ' + num1 + ' and ' + num2 + '?')
    console.log('The result is: ' + divide()); 
} else if (operation == 'sub') {
    console.log('subtract ' + num1 + ' and ' + num2 + '?')
    console.log('The result is: ' + subtract()); 
} else {
    console.log('O.o ?')
    results();
}





