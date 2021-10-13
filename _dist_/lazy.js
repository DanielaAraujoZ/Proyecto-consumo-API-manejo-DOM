//Uso de la API intersection Observer 

const isIntersecting = (entry) => { //¿Es visible o no en la pantalla?
    return entry.isIntersecting //Return true or false
}

const loadImage = (entry) =>{
    const container = entry.target
    const image = container.firstChild
    const url = image.dataset.src

    image.src= url; //Carga la imagen
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting)
    .forEach(loadImage)
})

 export const registerImage = (image) => {
    observer.observe(image)
}