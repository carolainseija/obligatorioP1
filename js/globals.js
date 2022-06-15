
function classes(vble, classe, classe2) {
    vble.remove(classe)
    vble.add(classe2)
}


function newFunction(id, name) {
    document.querySelector(`#${id}`).addEventListener("click", name)
}
