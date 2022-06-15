newFunction("btn-acceder", login)
let classContent = document.querySelector("#contentUser").classList;
let classNav = document.querySelector("#nav-buttons").classList;
let classViewUser = document.querySelector("#view-user").classList;
let textUser = document.querySelector("text-user");

function login() {
  eventsLogin()
}

function eventsLogin() {
  let username = document.querySelector("#txt-nameLogin").value;
  let password = document.querySelector("#txt-passwordLogin").value;
  let find = verifyExistUser(username, password);
  if (find != null) {
    userLogin = find;
    mostrarDisplayuser();
  } else {
    document.querySelector("#text-error").innerHTML = "El usuario y/o la contraseña no son válidos"
  }
}

function mostrarDisplayuser() {
  if (userLogin != null) {
    classes(classContent, "content-hidden", "content")
    classes(classModalLogin, "open", "close")
    classNav.add("close")
    classes(classViewUser, "not-view-user", "view-user")
    textUser.innerHTML = "aca va persona"
  }
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
  return userFind;
}
