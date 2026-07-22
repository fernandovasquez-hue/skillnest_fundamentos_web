console.log(`conexión exitsa`)
// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:
// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function  calcularEnvio(){
    let nombreCliente = prompt("Ingresar nombre de cilente: ");
    let peso = parseInt(prompt("Ingresar peso del paquete en kilos: "));
    let valorDespacho = 2000;
    let mensaje = "";
    if(peso > 0 && peso <= 2){
        mensaje = `Paquete pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else if(peso > 2 && peso <= 5 ){
        mensaje = `Paquete pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else if(peso > 5 && peso <= 10){
        mensaje = `Paquete pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else if(peso > 10 && peso <= 50){
        mensaje = `Paquete pesa: ${peso}
        \nValor despacho $${valorDespacho * peso}`
    }else{
        mensaje = ("Ingrese in valor valido!!")
    }

    alert(mensaje);
}

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function permisosBiblioteca(){
let usuario = prompt(`Ingrese tipo de usuario:`)
let cantidadLibros = parseInt(prompt(`Ingrese la cantidad de libros solicitados:`))
let permiso = "";
    if(usuario == "Profesor"){
        if(cantidadLibros > 0 && cantidadLibros <= 20){
            permiso = (`Profesor la solicitud de llevar ${cantidadLibros} libros
                \nA sido aceptada.`)
        }else{
            permiso = (`Profesor la solicitud de llevar ${cantidadLibros} libros
                \nA sido rechazada ingrese una cantidad que no se pase del limite.`)
        }
    }else if(usuario == "Estudiante"){
        if(cantidadLibros > 0 && cantidadLibros <= 10){
            permiso = (`Estudiante la solicitud de llevar ${cantidadLibros} libros
                \nA sido aceptada.`)
        }else{
            permiso = (`Estudiante la solicitud de llevar ${cantidadLibros} libros
                \nA sido rechazada ingrese una cantidad que que no se pase del limite.`)
        }
    }else{
        permiso = (`Ingrese un usuario que sea valido.`)
    }
alert(permiso);

}

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function  clasificacionDeportiva(){
    let nombreParticipante = prompt(`Ingrese su nombre:`)
    let edadParticipante = parseInt(prompt(`Ingrese su edad:`))
    let aviso = ""
    if(edadParticipante > 0 && edadParticipante <= 9){
        aviso = `Participante: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nUsted fue colocado en la categoria: Niño`
    }else if(edadParticipante > 9 && edadParticipante <= 12){
        aviso = `Participante: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nUsted fue colocado en la categoria: Niño Mayor`
    }else if(edadParticipante > 12 && edadParticipante <= 17){
        aviso = `Participante: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nUsted fue colocado en la categoria: Adolecente`
    }else if(edadParticipante > 17 && edadParticipante <= 59){
        aviso = `Participante: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nUsted fue colocado en la categoria: Adulto`
    }else if(edadParticipante > 59 && edadParticipante <= 120){
        aviso = `Participante: ${nombreParticipante}
        \nEdad: ${edadParticipante}
        \nUsted fue colocado en la categoria: Adulto Mayor`
    }else{
        aviso = `Participante ${nombreParticipante} ingrese una edad que sea valida!!`
    }

    alert(aviso)
}

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function sistemaBonificacion(){
    let nombreTrabajador = prompt(`Ingrese su nombre:`)
    let anosTrabajo = parseInt(prompt(`Ingrese años de antigüedad:`))
    let enunciado = ""
    if(anosTrabajo >= 0 && anosTrabajo <= 1){
        enunciado = `Empleado ${nombreTrabajador}
        \nAños de antigüedad: ${anosTrabajo}
        \nQuerer informarle que no recibira el bono`
    }else if(anosTrabajo > 1 && anosTrabajo <= 4){
        enunciado = `Empleado ${nombreTrabajador}
        \nAños de antigüedad: ${anosTrabajo}
        \nQuerer informarle que el bono que recibira es del 10% al 15%`
    }else if(anosTrabajo > 4 && anosTrabajo <= 10){
        enunciado = `Empleado ${nombreTrabajador}
        \nAños de antigüedad: ${anosTrabajo}
        \nQuerer informarle que el bono que recibira es del 20% al 25%`
    }else if(anosTrabajo > 10 && anosTrabajo <= 60){
        enunciado = `Empleado ${nombreTrabajador}
        \nAños de antigüedad: ${anosTrabajo}
        \nQuerer informarle que el bono que recibira es del 30% al 40%`
    }else{
        enunciado = `Empleado ${nombreTrabajador}
        \nIngrese años de antigüedad que sean validos`
    }

    alert(enunciado)
}

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida
function evaluacionVelocidad(){
    let nombreConductor = prompt(`Ingrese nombre del conductor:`)
    let velocidadRegristada = parseInt(prompt(`Ingresela velocidad registrada:`))
    let informe = ""
    if(velocidadRegristada > 0 && velocidadRegristada <= 10){
        informe = `Conductor: ${nombreConductor}
        \nVelocidad Registrada: ${velocidadRegristada}
        \nRango de velocidad: lento`
    }else if(velocidadRegristada > 10 && velocidadRegristada <= 30){
        informe = `Conductor: ${nombreConductor}
        \nVelocidad Registrada: ${velocidadRegristada}
        \nRango de velocidad: moderada`
    }else if(velocidadRegristada > 30 && velocidadRegristada <= 50){
        informe = `Conductor: ${nombreConductor}
        \nVelocidad Registrada: ${velocidadRegristada}
        \nRango de velocidad: rapido`
    }else if(velocidadRegristada > 50 && velocidadRegristada <= 120){
        informe = `Conductor: ${nombreConductor}
        \nVelocidad Registrada: ${velocidadRegristada}
        \nRango de velocidad: muy rapido`
    }else if(velocidadRegristada > 120){
        informe = `Conductor: ${nombreConductor}
        \nVelocidad Registrada: ${velocidadRegristada}
        \nExcediste el limite de velocidad`
    }else{
        informe = `Conductor ${nombreConductor} ingrese una velocidad que sea valida`
    }

alert(informe)
}