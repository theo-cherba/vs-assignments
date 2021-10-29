//#1 Loop through the following array and count how many "computers" there are. 
// Log the final count.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

var total = 0
for (var i = 0; i < officeItems.length; i++) {
    total = total + 1
}
console.log(total + "x Office Items");

//#2 Loop through the following array and log to the console 
//"old enough" if they are 18 or older, 
//and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
        var pronoun = ": He"
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
        var pronoun = ": She"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + pronoun + " is not old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + pronoun + " is old enough to see Mad Max." )
    }
}

/*
Imagine you have a button that toggles a light on and off. 
Loop through the following array of numbers 
and toggle the button the numbers of times for each number. 
The array [2, 3, 2] would toggle the button 7 times.
The light is off to start with. 
Log to the console whether or not the light is on at the end.

sample arrays:
[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"

*/