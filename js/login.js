document.querySelector("#btn-acceder").addEventListener("click", login)

function login() {
  eventsLogin()
}


function classes(vble, classe, classe2) {
  vble.remove(classe)
  vble.add(classe2)
}
function eventsLogin() {
  let username = document.querySelector("#txt-nameLogin").value;
  let password = document.querySelector("#txt-passwordLogin").value;

  let find = verifyExistUser(username, password);
  if (find != null) {
    userLogin = find;
    mostrarDisplayuser();
  } else {
    document.querySelector("#text-error").innerHTML = "Alguno de tus datos no coincide"
  }
}

let classContent = document.querySelector("#contentUser").classList;
let classNav = document.querySelector("#nav-buttons").classList;
let classViewUser = document.querySelector("#view-user").classList;
let textUser = document.querySelector("text-user");

function mostrarDisplayuser() {
  console.log("lego a la funcion")
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
      console.log("per", persona)
      userFind = persona;
    }
  }
  for (let local of arrayLocal) {
    //si encuentro que Array persona tiene person.name
    if (local.nombre == name && local.contraseña == password) {
      //una pocicion del array es igual a esta que declaraste en el input
      console.log("per", local)
      userFind = local;
    }
  }
  return userFind;
}
