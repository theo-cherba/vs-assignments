//ARRAY METHODS:
//HIGHER ORDER FUNCTIONS
    //.map()

// function doubleNumbers(arr){
//     let result = arr.map(function(num){
//         return num * 2
//     })
//     return result
// }
// console.log(doubleNumbers([2, 5, 100]))

// function stringItUp(arr){
//     let result = arr.map(function(num){
//         return num.toString()
//     })
//     return result
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function namesOnly(arr){
//     let result = arr.map(function (user){
//         return user.name
//     })
//     return result
// }

// // console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
//     let results = arr.map(function(user){
//         if (user.age > 17) {
//             console.log(`${user.name} can go to The Matrix`)
//         } else {
//             console.log(`${user.name} is under age!!`) 
//         }
//     })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

// function readyToPutInTheDOM(arr){
//     let results = arr.map(function(user){
//         let name = document.createElement(h1)
//         document.append(name)
//         let age = document.createElement(h2)
//         document.append(age)
//     })
//     console.log(document.h1.length)
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
//   // ["<h1>Angelina Jolie</h1><h2>80</h2>",
//   // "<h1>Eric Jones</h1><h2>2</h2>",
//   // "<h1>Paris Hilton</h1><h2>5</h2>",
//   // "<h1>Kayne West</h1><h2>16</h2>",
//   // "<h1>Bob Ziroll</h1><h2>100</h2>"]


// // //ARRAY FILTER EVERCISES:
// function fiveAndGreaterOnly(arr) {
//     let result = arr.filter(function(num){
//         if(num > 4){
//             return true
//         }
//     })
//     return result
// }
//   // test
//   console.log(fiveAndGreaterOnly([3, 5, 6, 8, 2])); /// [6, 8]

// function evensOnly(arr) {
//     let result = arr.filter(function(num){
//         if(num % 2 === 0){
//             return true
//         }    
//     })
//     return result
// }
//   // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// function fiveCharactersOrFewerOnly(arr) {
//     let result = arr.filter(function(word){
//         if(word.length < 6){
//             return true
//         }
//     })
//     return result
// }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// function peopleWhoBelongToTheIlluminati(arr){
//     let result = arr.filter(function(person){
//         if(person.member === true){
//             return true
//         }
//     })
//     return result
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
//   // =>
//   //[ { name: 'Angelina Jolie', member: true },
//   //  { name: 'Paris Hilton', member: true },
//   //  { name: 'Bob Ziroll', member: true } ]

// function ofAge(arr){
//     let result = arr.filter(function(person){
//         if(person.age > 17){
//             return true
//         }
//     })
//     return result
// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));
//   // =>
//   //[ { name: 'Angelina Jolie', age: 80 },
//   //  { name: 'Bob Ziroll', age: 100 } ]

//ARRAY SORT EXERCISES:
// function leastToGreatest(arr) {
//     arr.sort(function(a, b){
//         return a - b
//     })
//     return arr
// }
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// function greatestToLeast(arr) {
//     arr.sort(function(a, b){
//         return b - a
//     })
//     return arr
// }
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// function lengthSort(arr) {
//     arr.sort(function(a, b){
//         return a.length - b.length
//     })
//     return arr
// }
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

// function alphabetical(arr) {
//     arr.sort()
//     return arr
// }
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

// function byAge(arr){
//     arr.sort(function(a, b){
//         return a.age - b.age 
//     })
//     return arr
// }
// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]));
//   // => [ { name: 'Misunderstood Observer', age: 2 },
//   //  { name: 'Quiet Samurai', age: 22 },
//   //  { name: 'Unlucky Swami', age: 77 },
//   //  { name: 'Arrogant Ambassador', age: 100 } ]

// # .forEach
//     Returns: Undefined 
//     Purpose: Used in place of a for-loop
//         Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
//                 forEach will always loop the entire length of the array.
                
// # .find()
//     Returns: The first item it finds in the array that matches your criteria
//     Purpose: Finding an item in an array
    
// # .findIndex()
//     Returns: The index number of the first item it finds in the array that matches your criteria
//     Purpose: Finding the index number of an item in an array

// //ARRAY REDUCE EXERCISES:
// function total(arr) {
//     let result = 0
//     arr.forEach(function(num){
//         result += num
//     })
//     return result
// }
// console.log(total([1,2,3])); // 6

// function stringConcat(arr) {
//     let result = ""
//     arr.forEach(function(num){
//         result = result.concat(num)
//     }) 
//     return result
// }
//  console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//     let result = 0
//     arr.forEach(function(person){
//         if(person.voted === true){
//         result += 1
//         }
//     })
//     return result
// }
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//     let result = 0
//     arr.forEach(function(item){
//         result += item.price
//     })
//     return result
// }
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
//  console.log(shoppingSpree(wishlist)); // 227005

// function flatten(arr) {
//     var result = []
//     arr.forEach(function(arr2){
//         arr2.forEach(function(item){
//         result.push(item)
//         return result
//         })
//         return result
//     })
//     return result
// }
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// function voterResults(arr) {
//     var numYoungVotes = 0
//     var numYoungPeople = 0
//     var numMidVotes = 0
//     var numMidPeople = 0
//     var numOldVotes = 0
//     var numOldPeople = 0
//     arr.forEach(function(person){
//         if(person.age < 26){
//             numYoungPeople += 1
//             if(person.voted === true){
//                 numYoungVotes += 1
//             }
//         } else if(person.age > 25 && person.age < 36){
//             numMidPeople += 1
//             if(person.voted === true){
//                 numMidVotes += 1
//             }
//         } else if(person.age > 35){
//             numOldPeople += 1
//             if(person.voted === true){
//                 numOldVotes += 1
//             }
//         }
//     })
//     results = `numYoungVotes: ${numYoungVotes},
//     \nnumYoungPeople: ${numYoungPeople},
//     \nnumMidVotesPeople: ${numMidVotes},
//     \nnumMidsPeople: ${numMidPeople},
//     \nnumOldVotesPeople: ${numOldVotes},
//     \nnumOldsPeople: ${numOldPeople}`
//     return results
// }
// console.log(voterResults(voters)); // Returned value shown below:
// /*
// {   numYoungVotes: 1,
//     numYoungPeople: 4,
//     numMidVotesPeople: 3,
//     numMidsPeople: 4,
//     numOldVotesPeople: 3,
//     numOldsPeople: 4
// }
// */

// var peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]
// function sortedOfAge(arr){
//     var result = []
//     let people = arr.filter(function(person){
//         if(person.age > 17){
//             return true
//         }
//     })
//     people.sort(function(a, b){
//         var textA = a.lastName
//         var textB = b.lastName
//         return textA.localeCompare(textB)
//     })
//     people.forEach(function(person){
//         let output = `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
//         result.push(output)
//     })
//     return result
// }
// console.log(sortedOfAge(peopleArray));
// /*
// Output:
// [
//     "<li>Kyle Mooney is 27</li>",
//     "<li>Sarah Palin is 47</li>",
//     "<li>Rick Sanchez is 78</li>",
//     "<li>Morty Smith is 29</li>",
//     "<li>Lev Tolstoy is 82</li>"
// ]
// */

//ES6 PRACTICE:

// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//ES6 Arrow Functions:
//Task 1:
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {return { type: "carrot", name: carrot }})
// }
// console.log(mapVegetables(carrots))

//Task 2:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]
// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people))

//Task 3:
// const doMathSum = (a, b) => a + b
// const produceProduct = (a, b) => a * b
// console.log(doMathSum(1,5))

// Task 4:
// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// console.log(printString())

// //Task 5:
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];
// const filterForDogs = arr => arr.filter(animal => (animal.type === "dog") ? true : false)
// console.log(filterForDogs(animals))

// //Template Literals:
// const greeting = (location = "Hawaii", name = "Janice") => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay.\nPlease ask the president of ${location} if you need anything.`
// console.log(greeting())

// //Rest and Spread Operators:
// function collectAnimals(...animals) {
//     console.log(animals)
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     console.log({fruit},{sweets},{vegetables})
// }

// combineFruit(["apple", "pear"],["cake", "pie"],["carrot"])
// // //=> {
// //         fruit: ["apple", "pear"],
// //         sweets: ["cake", "pie"],
// //         vegetables: ["carrot"]
// //     }

// function parseSentence({location, duration}) {
//     console.log(`We're going to have a good time in ${location} for ${duration}`)
// }
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// });

// function returnFirst(items){
//     const firstItem = items[0]; 
//     return firstItem
// }
