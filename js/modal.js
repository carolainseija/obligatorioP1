document.querySelector("#btn-login").addEventListener("click", openModal)

let modalLogin = document.querySelector("#modal").classList;
function openModal() {
  modalLogin.remove("close")
  modalLogin.add("open")
  modalSignIn.remove("open")
}


document.querySelector("#btn-signIn").addEventListener("click", openModalSign)
let modalSignIn = document.querySelector("#modal-signIn").classList;

function openModalSign() {
  modalSignIn.remove("close")
  modalSignIn.add("open")
  modalLogin.remove("open")
}

document.querySelector("#cruce").addEventListener("click", changeStateModal)
document.querySelector("#cruce2").addEventListener("click", changeStateModal)

function changeStateModal() {
  modalLogin.add("close")
  modalSignIn.add("close")
}
