 let errorRg = document.querySelector("#text-err");
newFunction("btn-registrarme", register)

function register(){
    eventsRegister()
}

function eventsRegister(){
    let nameUserRegister = document.querySelector("#txt-nameUserRegister").value;
    let userPasswordRegister = document.querySelector("#text-passwordRegister").value;
    
    let find = verifyExistUser(nameUserRegister, userPasswordRegister);
    console.log("func")
    console.log("findd", find)
    if (find != null) {
    //   userLogin = find;
    // error.innerHTML = "Ya estas loguaedo"
    //   mostrarDiplayuser();
    mjeError(errorRg,"ya estas registrado.")
    } else {
        alert("puedes loguaearte")
    //   document.querySelector("#text-error").innerHTML = "El usuario y/o la contraseña no son válidos"
    }
}

function saveUser(){
   console.log("usuario guardao") 
}