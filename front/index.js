const inputToDoListName = document.querySelector(".createtodolist__input")
const buttonCreate = document.querySelector(".createtodolist__button")


buttonCreate.addEventListener("click", function (event) {
    createToDoList()
    createElement()
})

function createToDoList() {
    const main = document.querySelector("main")

    const section = document.createElement("section")
    section.className = "todolist"

    const title = document.createElement("h2")
    title.className = "todolist__title"
    title.textContent = inputToDoListName.value

    const div = document.createElement("div")
    div.className = "todolist__body"

    const ul = document.createElement("ul")
    ul.className = "todolist__body-list"

    const label = document.createElement("label")
    label.className = "todolist__body-label"
    label.setAttribute("for", "tache")
    label.textContent = "Nouvelle tâche"

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.className = "todolist__body-input"
    input.setAttribute("id", "tache")
    input.setAttribute("name", "tache")


    const button = document.createElement("button")
    button.className = "todolist__body-button"
    button.textContent = "Ajouter une tâche"

    main.appendChild(section)
    section.appendChild(title)
    section.appendChild(div)
    div.appendChild(ul)
    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(button)
}



function createElement() {
    const buttonAddElement = document.querySelector(".todolist__body-button")
    buttonAddElement.addEventListener("click", function (event) {
        const ul = document.querySelector(".todolist__body-list")
        const input = document.querySelector(".todolist__body-input")

        const li = document.createElement("li")
        li.textContent = input.value

        ul.appendChild(li)
    })
}

// createToDoListButton()
//     .then(() => createElement())
//     .catch((error) => {error})
