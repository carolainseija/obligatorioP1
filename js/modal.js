document.querySelector("#btn-login").addEventListener("click", openModal)

let classModalLogin = document.querySelector("#modal").classList;
function openModal() {
  classModalLogin.remove("close")
  classModalLogin.add("open")
  classModalRegister.remove("open")
}


document.querySelector("#btn-signIn").addEventListener("click", openModalSign)
let classModalRegister = document.querySelector("#modal-signIn").classList;

function openModalSign() {
  classModalRegister.remove("close")
  classModalRegister.add("open")
  classModalLogin.remove("open")
}

document.querySelector("#cruce").addEventListener("click", changeStateModal)
document.querySelector("#cruce2").addEventListener("click", changeStateModal)

function changeStateModal() {
  classModalLogin.add("close")
  classModalRegister.add("close")
}

