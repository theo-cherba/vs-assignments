var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];



// Remove the last item from the vegetable array.
vegetables.pop();

// Remove the first item from the fruit array.
fruit.shift();

// Find the index of "orange."
var number = fruit.indexOf("orange")

// Add that number to the end of the fruit array.
fruit.push(number)

// Use the length property to find the length of the vegetable array.
var number = vegetables.length

// Add that number to the end of the vegetable array.
vegetables.push(number)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
food = fruit.concat(vegetables)


// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)

// Reverse your array.
food = food.reverse()

// Turn the array into a string and return it.
food = food.toString()

//return should be,
// "3,pepper,1,watermelon,orange,apple"
console.log(food)