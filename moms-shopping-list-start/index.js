//PART 1: add list items, using pre-built ul, same format as examples.
var input = document.getElementsByTagName("input")[0];
var list = document.getElementsByTagName("ul")[0];
var form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
    event.preventDefault()
    createListItem(event)
});

function createListItem() {

    var listItem = document.createElement("li");

    var itemName = document.createElement("div");
    itemName.innerText = input.value
    input.value = ""

    var editButton = createEditButton();
    
    var xButton = createDeleteButton();

    listItem.appendChild(itemName);
    listItem.appendChild(editButton);
    listItem.appendChild(xButton);
    list.appendChild(listItem);
}

input.value = "EXAMPLE"
createListItem();

//PART 2: delete list items, using a button.
function createDeleteButton() {
    var xButton = document.createElement("button");
    xButton.innerText = "X"
    xButton.class = "xButton"
    xButton.style.margin = "5px"
    xButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.parentNode.remove();
    });
    return xButton;
} 

function createEditButton() {
    var editButton = document.createElement("button");
    editButton.innerText = "edit"
    editButton.class = "edit"
    editButton.addEventListener("click", function(event) {
        event.preventDefault();
        var editForm = document.createElement("form")
        var editInput = document.createElement("input")
        var saveButton = document.createElement("button")
        editForm.addEventListener("submit", function(event) {
            event.preventDefault()
            event.target.parentNode
        })

        editForm.appendChild(editInput);
        editForm.appendChild(saveButton);
        // console.log(event.target.parentNode)
        // event.target.removeChild()
        // event.target.remove()
        console.log("click");
    })
    return editButton;
}



/*

                <li>
                    <div>Milk</div>
                    <button>edit</button>
                    <button>X</button>
                </li>

                const subItem = createSubItem(e);
                subItem.append()
*/
//EXTRA CREDIT: 
// A user will be able to click the "edit" button and see an input box appear
// When the user clicks the "edit" button, a "save" button replace the "edit" button
// The input box will automatically have the value of the list item
// The user can edit and "save" the input box's value
// On save, the input box will disappear, and the new value will appear

//