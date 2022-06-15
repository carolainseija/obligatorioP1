
document.querySelector("#btn-acceder").addEventListener("click", login)

function login() {
  eventsLogin()
}

function eventsLogin() {
  let username = document.querySelector("#txt-nameLogin").value;
  let password = document.querySelector("#txt-passwordLogin").value;

  let find = verifyExistUser(username, password);
  if (find != null) {
    userLogin = find;
    console.log("find ok")
  } else {
    document.querySelector("#text-error").innerHTML = "Alguno de tus datos no coincide"
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

