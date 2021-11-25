const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(element => {

    element.addEventListener('click', () => {
        removeActive()
        element.classList.add('active')
    })
})
function removeActive() {
    panels.forEach(element => {
        element.classList.remove('active')
    })
}