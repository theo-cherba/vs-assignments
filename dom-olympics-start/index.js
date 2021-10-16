//QUALIFIER: insert header and subtext text, as specified.
document.body.style.backgroundColor = "cornflowerblue"

var header = document.getElementById("header");
var headerText = document.createElement("h1");
headerText.textContent = "JavaScript Made This!!"
headerText.style.textAlign = "center"
header.prepend(headerText);

var subText = document.createElement("div");
subText.style.textAlign = "center"
subText.style.padding = "10px"
header.append(subText);

var myName = document.createElement("span");
myName.textContent = "Theo Cherba " 
myName.style.color = "blue"
subText.prepend(myName);

var madeThis = document.createElement("span");
madeThis.textContent = " wrote the JavaScript" 
subText.append(madeThis);

//BRONZE: change the default text in the conversation to something fun 
// and make the CLEAR button funcional, clearing all messages.
var allMessages = document.querySelectorAll('div');
var messageLeft = document.getElementsByClassName("message left");
var messageRight = document.getElementsByClassName("message right");
var messages = document.getElementsByClassName("messages");
allMessages.textContent = ""
messageLeft[0].textContent = "Hi"
messageRight[0].textContent = "Hey, when does a joke become a dad joke?"
messageLeft[1].textContent = "I don't know, when?"
messageRight[1].textContent = "When it becomes apparent."

var clearButton = document.getElementById('clear-button');
clearButton.addEventListener("mousedown", function() {
    console.log('clear');
    for (var i = 2; i < allMessages.length; i++) {
    allMessages[i].textContent = ""
    input.value = ""
    }
}); 

//SILVER: make theme-drop down funtional
var theme = document.getElementById("theme-drop-down");
theme.onchange = function() {
    switch (theme.value) {
        case "theme-one" ://blue/brown
            for (var i = 0; i < messageRight.length; i++) {
                messageRight[i].style.backgroundColor =  "lightBlue" 
                messageRight[i].style.color = "black"
            }
            for (var i = 0; i < messageLeft.length; i++) {
                messageLeft[i].style.backgroundColor = "burlyWood"
                messageLeft[i].style.color = "black"
            }
            break;
        case "theme-two" : //red/black
            for (var i = 0; i < messageRight.length; i++) {
                messageRight[i].style.backgroundColor =  "red" 
                messageRight[i].style.color = "white"
            }
            for (var i = 0; i < messageLeft.length; i++) {
                messageLeft[i].style.backgroundColor = "black"
                messageLeft[i].style.color = "white"
            }
            break;
    }
}

//GOLD: make input and send button functional, new messages can be added..
//EXTRA CREDIT: every other message sent is on opposite side and in proper themes.
var main = document.getElementById("main");
var form = document.getElementsByName("message");
var sendButton = document.querySelector("form button");
var input = document.getElementById("input");
input.style.type = "text";
var text = input.value;
main.style.backgroundColor = "Grey"
messages[0].style.backgroundColor = "darkGrey"

sendButton.addEventListener("mousedown", function() {
    console.log('yay');
    var newMessage = document.createElement("div");
    newMessage.textContent = input.value;
    if (side = "left") {
        newMessage.className = "message left"
            var side = "right"
    } else {
        newMessage.className = "message right"
    }
    switch (side) {
        case "left" :
            newMessage.className = "message left"
            var side = "right"
            break;
        case "right" :
            newMessage.className = "message right"
            var side = "left"
            break;
        default:
            newMessage.className = "message left"
            var side = "right"
    }    
    var messageLeft = document.getElementsByClassName("message left");
    var messageRight = document.getElementsByClassName("message right");
    switch (theme.value) {
        case "theme-one" ://blue/brown
            for (var i = 0; i < messageRight.length; i++) {
                messageRight[i].style.backgroundColor =  "lightBlue" 
                messageRight[i].style.color = "black"
            }
            for (var i = 0; i < messageLeft.length; i++) {
                messageLeft[i].style.backgroundColor = "burlyWood"
                messageLeft[i].style.color = "black"
            }
            break;
        case "theme-two" : //red/black
            for (var i = 0; i < messageRight.length; i++) {
                messageRight[i].style.backgroundColor =  "red" 
                messageRight[i].style.color = "white"
            }
            for (var i = 0; i < messageLeft.length; i++) {
                messageLeft[i].style.backgroundColor = "black"
                messageLeft[i].style.color = "white"
            }
            break;
    }         
    messages[0].append(newMessage);
    input.value = ""
});