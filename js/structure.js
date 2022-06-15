let arrayPersonas = [];
let arrayReservas = [];
let arrayLocal = [];

let userLogin = null;
//hago una tabla con los locales
//genero el boton dinamicamente que quede con el id asociado

let ultimoIdLocal = 1;
class Local {
  constructor(nombre, usuario, contraseña, tipo, direccion, foto, estado) {
    //el id no lo muestro ene l constructor porque no viene de afuera, ya se genera automaticamente.
    this.id = ultimoIdLocal;
    ultimoIdLocal++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.tipo = tipo;
    this.direccion = direccion;
    this.foto = foto;
    this.estado = estado;
  }
}


let ultimoIdPersona = 1;
//en el constructor solo va lo que llega de afuera, por ejemplo id no tieen porque se van a generar automaticamente,
class Persona {
  constructor(usuario, nombre, contraseña) {
    this.id = ultimoIdPersona;
    ultimoIdPersona++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}

//las reservas son en base al local
//con los ids puedo recorrer el array y encontrar os demas datos.

let ultimaIdReservas = 1;
class Reserva {
  //ID RESERVAS, PERSONA, LOCAL
  constructor(nombre, estado, cupos, promedio) {
    this.id = ultimaIdReservas;
    ultimaIdReservas++;
    // this.idlocal = idlocal;
    // this.idpersona = idpersona
    this.nombre = nombre;
    this.estado = estado;
    this.cupos = cupos;
    this.promedio = promedio;
  }
}
