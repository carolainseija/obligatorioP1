Precargar()

function Precargar() {
    let p1 = altaPersona("carolain", "caro", "contraseña")
    let p2 = altaPersona("Marcos", "marcos02", "contraseña2")

    let r1 = altaReserva("persona",  "local", "3", "estao")
    
    let r2 = altaReserva("persona",  "local", "2", "estao")
    
    let r3 = altaReserva("persona",  "local", "1", "estao")
    
    // let r1 = altaReserva("persona",  "local", "cupos", "estao")
    // let r2 = altaReserva("persona", "finalizada", "2", "10")
    // let r3 = altaReserva("persona", "cancelada", "3", "10")

    let l1 = altaLocal("Museo america", "museodeamerica", "contraeñaamerica", "Museo", "Av. Millán 4015, 11700 Montevideo, Departamento de Montevideo", "3","blanes.jpg")
    let a2 = altaLocal("Rumba bar", "rumbabar", "contraseñaderumba", "Restaurante", "Dr. Héctor Miranda 2427, 11300 Montevideo, Departamento de Montevideo", "3", "rumba.jpg")
    let a3 = altaLocal("Sofitel Athens Airport", "sofitel", "sofi", "Restaurante", "Rambla Republica de Mexico s/n, Carrasco, 11500 Montevideo, Uruguay", "3", "sofitel.jpg")
    let a4 = altaLocal("Solis", "museos", "solis", "Teatro", "Buenos Aires s/n esquina Bartolomé Mitre. 1950 3323", "3","solis.webp")

}


//los locales tienen reservas.

function altaPersona(nombre, usuario, contraseña) {
    persona = null;
    if (nombre != "" && usuario != " " && contraseña != " ") {
        let personaNueva = new Persona(nombre, usuario, contraseña)
        persona = personaNueva;
        arrayPersonas.push(persona)
    }
    return persona;
}

//cupos no van en reserva vienen de local
function altaReserva(nombre, estado, cupos, promedio) {
    let reserva = null
    if (nombre != " " & estado != " " & cupos != " ", promedio != " ") {
        let nuevaReserva = new Reserva(nombre, estado, cupos, promedio)
        reserva = nuevaReserva;
        arrayReservas.push(reserva)
    }
    return reserva;
}

function altaLocal(nombre, usuario, contraseña, tipo, direccion, cupomax, foto) {
    let local = " ";
    if (nombre != " " & usuario != " " & contraseña != " " & tipo != " " & direccion != " " && cupomax != " " && foto != " " ) {
        let nuevoLocal = new Local(nombre, usuario, contraseña, tipo, direccion, cupomax, foto)
        local = nuevoLocal;
        arrayLocal.push(local)
    }
    return local;
}

function viewLocals() {
    let allLocals = "";
    for (let locals of arrayLocal) {
        allLocals += `<div class="cards">
                       <img src="../assets/${locals.foto}" />
                        <div>
                        <h3>${locals.nombre}</h3>
                        <p>${locals.direccion}</p>
                        <p>${locals.estado}</p>                                          
                        <input type="button" class="btn-reserve" id="btn${locals.id}" data-local="${locals.id}" value="Reservar ahora">
                        </div>
                    </div>`}
    document.querySelector("#services").innerHTML = allLocals;

    let allbtn = document.querySelectorAll(".btn-reserve"); //querySelectorAll para que me traiga de todas sino no es iterable me dice
    for (let button of allbtn) {
        button.addEventListener("click", saveReserve)
    }

console.log("allbtn", allbtn[0])
}
viewLocals()


function saveReserve() {
    console.log("funcion reservar")

    let idLocal= this.getAttribute("data-local");
    //la id original era btn${id} pero para igualarlo debera sacarle los primeros 3 caracters"btn",
    // asique para hacerlo mas facil, lo igualo a una data local que lleva el id directo,
    //lo data sirven para pasar atributos los que quiera y con el nombre qe quiera.
    for (let locales of arrayLocal){
        if (locales.id == idLocal){
           console.log("reservado");
           //creo una reserva
           //Se guarad en alta reserva
           //esto mismo pero dinamico.
           altaReserva( userLogin, locales, "2", "pendiente")
           console.log(locales.cupomax, locales.nombre)  
           //ahora a los lcales les resto loq ue esta e cupos
           locales.cupomax = locales.cupomax -1 ;
           console.log("nuevos", locales.nombre, locales.cupomax)      
        }
    }
}

console.log(arrayLocal)