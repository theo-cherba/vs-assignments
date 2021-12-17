function getData(){
    axios.get("https://api.vschool.io/theo/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

function createListItem(data){
    const li = document.createElement('li')
    li.id = data._id
    createTitle(li, data)
    createImage(li, data)
    createPrice(li, data)
    createDescription(li, data)
    createButtons(li, data)
    document.getElementById('todo-list').appendChild(li)
}

function createTitle(li, data){
    const titleSpan = document.createElement('span')
    titleSpan.textContent = "Title:"
    const title = document.createElement('p')
    title.textContent = data.title
    if(data.completed === true){
        title.setAttribute(`class`, `complete`)
    }
    li.appendChild(titleSpan)
    li.appendChild(title)
}

function createImage(li, data){
    if(data.imgUrl){
        const img = document.createElement('img')
        img.src = data.imgUrl
        li.appendChild(img)
    }
}

function createPrice(li, data){
    if(data.price){
        const priceSpan = document.createElement('span')
        priceSpan.textContent = "Price:"
        const price = document.createElement('p')
        if(data.completed === true){
            price.setAttribute(`class`, `complete`)
        }
        price.textContent = data.price
        li.appendChild(priceSpan)
        li.appendChild(price)
    }
}

function createDescription(li, data){
    if(data.description){
        const br = document.createElement('br')
        const descriptionSpan = document.createElement(`span`)
        descriptionSpan.textContent = `Description:`
        const description = document.createElement('p')
        if(data.completed === true){
            description.setAttribute(`class`, `complete`)
        }
        description.textContent = data.description
        li.appendChild(br)
        li.appendChild(descriptionSpan)
        li.appendChild(description)
    }
}

function createButtons(li, data){
    const div = document.createElement('div')
    createCheckbox(div, data)
    createEditButton(li, div, data)
    createDeleteButton(li, div, data)
    li.appendChild(div)
}

function createCheckbox(div, data){
    const label = document.createElement('label')
    label.innerText = "Complete "
    const input = document.createElement(`input`)
    input.type = "checkbox"
    if(data.completed === true){
        input.checked = true
    }
    input.addEventListener('change', function() {
        if (this.checked) {
            const update = {completed: true}
            axios.put(`https://api.vschool.io/theo/todo/${data._id}`, update)
            .then(res =>  getData())
            .catch(err => console.log(error))
        } else {
            const update = {completed: false}
            axios.put(`https://api.vschool.io/theo/todo/${data._id}`, update)
            .then(res =>  getData())
            .catch(err => console.log(error))
        }
    });
    label.appendChild(input)
    div.appendChild(label)
}

function createEditButton(li, div, data){
    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.addEventListener("click", function(event) {
        event.preventDefault();
        const titleInput = document.createElement('input')
        titleInput.value = data.title
        titleInput.placeholder = `Title (required)`
        const imgInput = document.createElement('input')
        imgInput.value = data.imgUrl
        imgInput.placeholder = `Image URL`
        const priceInput = document.createElement('input')
        priceInput.value = data.price
        priceInput.placeholder = `Price`
        priceInput.type = `number`
        const descriptionInput = document.createElement('input')
        descriptionInput.value = data.description
        descriptionInput.placeholder = `Description`
        while(li.firstChild){
            li.removeChild(li.firstChild)
        }
        const id = data._id
        const saveButton = document.createElement("button");
        saveButton.innerText = "Save"
        saveButton.addEventListener("click", function(event) {
            event.preventDefault();
            console.log(`save was clicked`)
            update = {
                title: `${titleInput.value}`,
                imgUrl: `${imgInput.value}`,
                price: `${priceInput.value}`,
                description: `${descriptionInput.value}`
            }
            const id = data._id
            axios.put(`https://api.vschool.io/theo/todo/${id}`, update)
            .then(response =>  getData())
            .catch(error => console.log(error))      
        });    
        const xButton = document.createElement("button");
        xButton.innerText = "X"
        xButton.addEventListener("click", function(event) {
            event.preventDefault();
            getData();
        });      
        const div = document.createElement('div');
        div.appendChild(saveButton)
        div.appendChild(xButton)
        li.appendChild(titleInput)
        li.appendChild(imgInput)
        li.appendChild(priceInput)
        li.appendChild(descriptionInput)
        li.appendChild(div)
    })
    div.appendChild(editButton)
}

function createDeleteButton(li, div, data){
    const xButton = document.createElement("button");
    xButton.innerText = "X"
    xButton.addEventListener("click", function(event) {
        event.preventDefault();
        const id = data._id
        li.remove();
        axios.delete(`https://api.vschool.io/theo/todo/${id}`)
        .then(res => console.log(response.data))
        .catch(err => console.log(error))
    });
    div.appendChild(xButton)
} 

function listData(data){
    clearList()
    console.log(data)
    for(let i = 0; i < data.length; i++){
        createListItem(data[i])
    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

//START

getData()

const todoForm = document["todo-form"]
todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value,
        description: todoForm.description.value
    }
    todoForm.title.value = ""
    todoForm.imgUrl.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    axios.post("https://api.vschool.io/theo/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})
