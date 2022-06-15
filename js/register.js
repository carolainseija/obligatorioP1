let nameUserRegister = document.querySelector("#xt-nameUserRegister").value;
let userPasswordRegister = document.querySelector("#text-passwordRegister").value;

newFunction("btn-signIn", register)

function register(){
    verifyExistUserr(nameUserRegister, userPasswordRegister)
    console.log("user", userFind)
}
