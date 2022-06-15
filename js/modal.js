document.querySelector("#btn-login").addEventListener("click", openModal)

let modalLogin = document.querySelector("#modal").classList;
function openModal() {
  modalLogin.remove("close")
  modalLogin.add("open")
  //esto es por si modal login esta abierto, quiero que lo cierre
  modalSignIn.remove("open")
}


// modal 2
document.querySelector("#btn-signIn").addEventListener("click", openModalSign)

let modalSignIn = document.querySelector("#modal-signIn").classList;

function openModalSign() {
  modalSignIn.remove("close")
  modalSignIn.add("open")
  modalLogin.remove("open")
}

// ambops
document.querySelector("#cruce").addEventListener("click", changeStateModal)
document.querySelector("#cruce2").addEventListener("click", changeStateModal)
function changeStateModal(){
  modalLogin.add("close")
  modalSignIn.add("close")
}
