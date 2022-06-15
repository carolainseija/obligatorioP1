
document.querySelector("#btn-acceder").addEventListener("click", login)

function login() {
  tdLogin()
}

function tdLogin() {
  let username = document.querySelector("#txt-nameLogin").value;
  let password = document.querySelector("#txt-passwordLogin").value;

  let find = verifyExistUser(username, password);
  if (find != null) {
    userLogin = find;
    console.log("find ok")
  } else {
    console.log("no te has logueado")
  }

}

function verifyExistUser(name, password) {
  let userFind = null;
  for (let persona of arrayPersonas) {
    //si encuentro que Array persona tiene person.name
    if (persona.nombre == name && persona.contraseña == password) {
      //una pocicion del array es igual a esta que declaraste en el input
      console.log("per", persona)
      userFind = persona;
    }
  }
  return userFind;
}

