/* =============================================
    business as a strictly online DJ (DJ JS). 
    creating a website where people can 
    change the color of a square on the page 
    by interacting with different HTML Events.

The square's color will change as follows:
-Blue when the mouse hovers over the square
-Red when the mouse button is held down over the square
-Yellow when the mouse button is let go over the square
-Green when the mouse is double clicked in the square
-Orange when the mouse scroll is used somewhere in the window 
    (not just over the square).
-also be able to press the first letter of the colors 
    (typing "r" on the keyboard for "red", for example) 
    and have the box change to that color.
================================================
*/ 

document.body.style.textAlign = "center"
document.body.style.backgroundColor = "cornflowerBlue"

var header = document.createElement("h1");
header.textContent = "DJ JS"
document.body.append(header);

var subtext = document.createElement("h3");
subtext.textContent = "-strictly online DJ-"
document.body.append(subtext);

var square = document.createElement("div");
square.style.display = "inline-block"
square.style.height = "300px"
square.style.width = "300px"
square.style.backgroundColor = "black"
square.style.border = "10px solid black"
document.body.append(square);

square.addEventListener('mouseover', function() {
    square.style.backgroundColor = "blue"
})

square.addEventListener('mousedown', function() {
    square.style.backgroundColor = "red"
})

square.addEventListener('mouseup', function() {
    square.style.backgroundColor = "yellow"
})

square.addEventListener('dblclick', function() {
    square.style.backgroundColor = "green"
})

document.body.addEventListener('wheel', function() {
    square.style.backgroundColor = "orange"
})

document.addEventListener('keypress', function(event) {
    switch (event.key) {
        case "r" : 
            square.style.backgroundColor = "red"
            break;
        case "b" : 
            square.style.backgroundColor = "blue"
            break;
        case "y" : 
            square.style.backgroundColor = "yellow"
            break;
        case "g" : 
            square.style.backgroundColor = "green"
            break;
        case "o" : 
            square.style.backgroundColor = "orange"
            break;
    }  
}) 