
function classes(vble, classe, classe2) {
    vble.remove(classe)
    vble.add(classe2)
}


function newFunction(id, name) {
    document.querySelector(`#${id}`).addEventListener("click", name)
}


function verifyExistUser(name, password) {
    let userFind = null;
    for (let persona of arrayPersonas) {
        //si encuentro que Array persona tiene person.name
        if (persona.nombre == name && persona.contraseña == password) {
            //una pocicion del array es igual a esta que declaraste en el input
            userFind = persona;
        }
    }
    for (let local of arrayLocal) {
        //si encuentro que Array persona tiene person.name
        if (local.nombre == name && local.contraseña == password) {
            //una pocicion del array es igual a esta que declaraste en el input
            userFind = local;
        }
    }
    console.log("user", userFind)
    return userFind;
}


function msjError(error, msj) {
    error.innerHTML = `${msj}`
}
