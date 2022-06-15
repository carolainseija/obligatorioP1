let errorRg = document.querySelector("#text-errorRg");

newFunction("btn-registrarme", register)

function register() {
    eventsRegister()
}

function eventsRegister() {
    let nameUserRegister = document.querySelector("#txt-nameUserRegister").value;
    let userPasswordRegister = document.querySelector("#text-passwordRegister").value;

    let find = verifyExistUser(nameUserRegister, userPasswordRegister);
    console.log("func")
    console.log("findd", find)
    if (find != null) {
        msjError(errorRg, "ya estas registrado.")
    } else {
        saveUser()
    }
}

function saveUser() {
    console.log("usuario guardao")
}