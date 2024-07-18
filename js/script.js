let menuElem = document.querySelector(".context-menu")

document.body.addEventListener("contextmenu" , function (event) {
    event.preventDefault()
    menuElem.style.display = "block"
    menuElem.style.left = event.pageX + "px"
    menuElem.style.top = event.pageY + "px"
})

document.body.addEventListener("click" , function () {
    menuElem.style.display = "none"
    
})
document.body.addEventListener("keydown" , function (event) {
    if (event.key === "Escape") {
        menuElem.style.display = "none"
    }
})