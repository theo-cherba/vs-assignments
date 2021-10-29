// from previous debugging
const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");

function formAlert() {
    let firstName = form.elements["first-name"].value;
    form.elements["first-name"].value = ""
    let lastName = form.elements["last-name"].value;
    form.elements["last-name"].value = ""
    let age = form.elements["age"].value;
    form.elements["age"].value = ""

    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById("paleo").value);
    }

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}\nDietary Restrictions: ${diet}`);
}


submit.addEventListener("click", function() {
    formAlert()
})