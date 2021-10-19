//STRING METHODS EXERCISE
/*
Write a function that takes a string as a parameter 
and returns the same string in all capital letters 
followed by all lowercase letters.

capilizeAndLowercase("HelLo") // => "HELLOhello"
*/
// var example = "ExamPle"
// console.log(capilizeAndLowercase(example))

// function capilizeAndLowercase(e) {
//     var input = e
//     var caps = input.toUpperCase()
//     var noCaps = input.toLowerCase()
//     return caps + noCaps
// }


//  //  //
/* 
Write a function that takes a string as a parameter 
and returns a number that is half the string's length, rounded down.
Hint: You'll need to use Math.floor().

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5
*/

// var example = "Hello World"
// console.log(findMiddleIndex(example))

// function findMiddleIndex(e) {
//     var input = e
//     var half = input.length / 2
//     var middleIndex = Math.floor(half)
//     return middleIndex
// }

//  //  //
/*
Write a function that uses slice() and the other functions you've written 
to return the first half of the given string.

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"
*/

//  //  //
/*
Write a function that takes a string as a parameter 
and returns that string where the first half is capitalized, 
and the second half is lowercase.
Hint: If your string length is odd, use Math.floor() to round down.

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
*/

//  //  //

/*
Optional Code Challenge
(This one is a step up in difficulty and utilizes 
the .split() string method and .join() array method):
Write a function that takes a string as a parameter 
and capitalizes any character that follows a space.

capitalize("hey friends! practice practice practice!") 
// -> "Hey Friends! Practice Practice Practice!"
*/

//  //  //