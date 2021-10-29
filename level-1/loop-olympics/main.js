////Preliminaries: 
////Write a for loop that prints to the console the numbers 0 through 9.
// for (var i = 0; i <= 9; i++) {
//     console.log(i);
// }
////Write a for loop that prints to the console 9 through 0.
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }
////Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

////BRONZE MEDAL:
////Write a for loop that will push the numbers 0 through 9 to an array.
// var array = []
// for (var i = 0; i <= 9; i++) { 
//     array.push(i)
// }
// console.log(array)
////Write a for loop that prints to the console only even numbers 0 through 100.
// for (i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }
//Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// var array = []
// for (i = 0; i < fruit.length; i++) {
//     if(i % 2 !== 0) {
//         array.push(fruit[i]);
//     }
// }
// console.log(array)

////SILVER MEDAL:

const peopleArray = [
    {
    name: "Harrison Ford",
    occupation: "Actor"
    },
    {
    name: "Justin Bieber",
    occupation: "Singer"
    },
    {
    name: "Vladimir Putin",
    occupation: "Politician"
    },
    {
    name: "Oprah",
    occupation: "Entertainer"
    }
]
////Write a loop that will print out all the names of the people of the people array
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }
////Write a loop that pushes the names into a names array, 
var names = ["names:"]
var occupations = ["occupations:"]
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
////and the occupations into an occupations array.
    occupations.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupations)
////Write a loop that pushes every other name to an array starting with the first person, 
////in this case "Harrison Ford", 
////and every other occupation to another array starting with, 
////in this case, "Singer".
