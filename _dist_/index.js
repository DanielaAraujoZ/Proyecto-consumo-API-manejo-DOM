import { registerImage } from "./lazy.js"

//Creación de los nodos para las imagenes a visualizar en el navegador.
const min = 1
const max = 122
const random = () => Math.floor(Math.random() * (max-min)) +min

const createImageNode = ()=>{
    const container = document.createElement("div")
    container.className = "p-5"

    const image = document.createElement("img")
    image.id="img"
    image.className = "mx-auto"
    image.width = "380"
    image.dataset.src =`https://randomfox.ca/images/${random()}.jpg` //dataset comunica entre HTML y JS.

    container.appendChild(image)
    return container
}
const newImage = createImageNode()
const mountNode = document.getElementById("images")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")
const removeOneImageButton = document.getElementById("addOne")

//Funciones con los botones
const add = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
    registerImage(newImage)
}
const removeOneImage = ()=>{
    const hijo = document.querySelector(".p-5")
    mountNode.removeChild(hijo)
}

const remove = () => {//Para limpiar la pantala
    mountNode.innerHTML = ""
}

//Eventos
addButton.addEventListener("click", add)
removeOneImageButton.addEventListener("click", removeOneImage)
removeButton.addEventListener("click", remove)