Precargar()

function Precargar() {
    let p1 = altaPersona("carolain", "caro", "contraseña")
    let p2 = altaPersona("Marcos", "marcos02", "contraseña2")
    let r1 = altaReserva("Parque diversiones", "Pendiente", "100", "10")
    let r2 = altaReserva("Festival", "finalizada", "50", "80")
    let l1 = altaLocal("Museo america", "museodeamerica", "contraeñaamerica", "Museo", "museo.jpg", "Av. Millán 4015, 11700 Montevideo, Departamento de Montevideo", "Pendiente")
    let a2 = altaLocal("Rumba bar", "rumbabar", "contraseñaderumba", "Restaurante", "restaurante.jpg#", "Dr. Héctor Miranda 2427, 11300 Montevideo, Departamento de Montevideo", "Pendiente")
    let a3 = altaLocal("Rumba", "rumba", "rumba", "Restaurante", "restaurante.jpg#", "Dr. Héctor Miranda 2427, 11300 Montevideo, Departamento de Montevideo", "Pendiente")
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

function altaReserva(nombre, estado, cupos, promedio) {
    let reserva = null
    if (nombre != " " & estado != " " & cupos != " ", promedio != " ") {
        let nuevaReserva = new Reserva(nombre, estado, cupos, promedio)
        reserva = nuevaReserva;
        arrayReservas.push(reserva)
    }
    return reserva;
}

function altaLocal(nombre, usuario, contraseña, tipo, direccion, foto, estado) {
    let local = " ";
    if (nombre != " " & usuario != " " & contraseña != " " & tipo != " " & direccion != " ", foto != " " & estado != " ") {
        let nuevoLocal = new Local(nombre, usuario, contraseña, tipo, direccion, foto, estado)
        local = nuevoLocal;
        arrayLocal.push(local)
    }
    return local;
}
