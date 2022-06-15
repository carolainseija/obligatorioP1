newFunction("btn-acceder", login)
let classContent = document.querySelector("#contentUser").classList;
let classNav = document.querySelector("#nav-buttons").classList;
let classViewUser = document.querySelector("#view-user").classList;
let errorLg = document.querySelector("#text-errorLg");

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
    msjError(errorLg, "El usuario y/o la contraseña no son válidos")
  }
}

function mostrarDisplayuser() {
  if (userLogin != null) {
    classes(classContent, "content-hidden", "content")
    classes(classModalLogin, "open", "close")
    classNav.add("close")
    classes(classViewUser, "not-view-user", "view-user")
  }
}
