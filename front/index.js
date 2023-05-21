const inputToDoListName = document.querySelector(".createtodolist__input")
const buttonCreate = document.querySelector(".createtodolist__button")
const formCreateList = document.querySelector(".createtodolist__form")

formCreateList.addEventListener("submit", function (event) {
    event.preventDefault()
    if(inputToDoListName.value === "") {
        return false
    } else if (!document.querySelector(".todolist")) {
        createToDoList()
        createElement()
    } else {
        const warning = document.createElement("p")
        warning.textContent = "Une liste est déjà en cours."
        const createSection = document.querySelector(".createtodolist")
        createSection.appendChild(warning)
    }
})


function createToDoList() {
    const main = document.querySelector("main")

    const section = document.createElement("section")
    section.className = "todolist"

    const title = document.createElement("h2")
    title.className = "todolist__title"
    title.textContent = inputToDoListName.value
    inputToDoListName.value = ""

    const div = document.createElement("div")
    div.className = "todolist__body"

    const ul = document.createElement("ul")
    ul.className = "todolist__body-list"

    const form = document.createElement("form")
    form.setAttribute("action", "#")
    form.className = "todolist__body-form"

    const label = document.createElement("label")
    label.className = "todolist__body-label"
    label.setAttribute("for", "tache")
    label.textContent = "Nouvelle tâche: "

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
    div.appendChild(form)
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)
}

function createElement() {
    const formCreateThing = document.querySelector(".todolist__body-form")
    const ul = document.querySelector(".todolist__body-list")
    const input = document.querySelector(".todolist__body-input")
    formCreateThing.addEventListener("submit", function (event) {
        event.preventDefault()
        if (input.value === "") {
            return false
        } else {
            const li = document.createElement("li")
            li.textContent = `${input.value}`
            input.value = ""
            validateElement(li)

            ul.appendChild(li)
        }
    })
}

function validateElement(li) {
    let isDone
    const valid = " VALIDÉE!"
    li.addEventListener("click", function (event) {
        if (!isDone) {
            li.textContent += valid
            isDone = true
        } else if (isDone) {
            li.textContent = li.textContent.split(`${valid}`)[0]
            isDone = false
        }
    })
}