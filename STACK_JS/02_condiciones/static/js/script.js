console.log(`Conexión exitosa con JS...`)
// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar
//parseInt() --> transforma texto a número
//promt() pide al usuario un valor
function sistemaDescuento(){
    let nombre = prompt("Ingrese su nombre: ");
    let monto = parseInt(prompt("Ingrese el monto de compra:"));
    if (monto >= 50000){
        alert(`El monto con descuento es: ${monto - (monto * 0.20)}`)
    }else if(monto >= 30000){
        alert(`El monto con descuento es: ${monto - (monto * 0.10)}`)
    } else if(monto <= 30000 && monto > 0){
        alert(`El monto final es: ${monto}. Sin descuento`)
    }else{
        alert(`Ingrese valores válidos`)
    }
}

// ✅ Ejercicio 2: Acceso a evento
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”
function accesoEvento(){
    let edad = parseInt(prompt("Ingrese su edad"))
    if(edad <= 100 && edad >= 18){
        alert(`Accesso permitido`);
    }else if(edad < 18 && edad > 0){
        let acompanante = prompt("¿Viene con acompañante?: si/no")
        if(acompanante == "si"){
            alert(`Accesso permitido`);
        }else{
            alert(`Accesso denegado`);
        }
    }else{
        alert(`ingrese una edad válida`)
    }
}

// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.
function mostrarTemperatura(){
    let temperatura = parseInt(prompt("Ingrese la temperatura:"))
    if(temperatura < 10){
        alert(`Hace frío`);
    } else if(temperatura >= 10 && temperatura <= 24){
        alert(`Temperatura agradable`);
    } else if(temperatura >= 25){
        alert(`Hace calor`);
        if(temperatura > 35){
            alert(`Temperatura extrema`);
        }
    }
}

// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”
function verificacionAdministrador(){
    let usuario = prompt("Ingrese su usuario: ")
    let contrasena = prompt("Ingrese su contraseña: ")
    if(usuario === "admin" && contrasena === "12345"){
        alert("Bienvenido administrador");
    } else if(usuario === "admin" && contrasena !== "12345"){
        alert("Contraseña incorrecta");
    } else {
        alert("Usuario no encontrado");
    }
}

// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
// Además:
// Si alguna nota es menor a 2.0 mostrar:
//  “Debe asistir a reforzamiento”.
function sistemaAprobacion(){
    let nombre = prompt("Ingrese su nombre: ")
    let nota1 = parseFloat(prompt("Ingrese la nota 1: "))
    let nota2 = parseFloat(prompt("Ingrese la nota 2: "))
    let nota3 = parseFloat(prompt("Ingrese la nota 3: "))
    let promedio = (nota1 + nota2 + nota3) / 3
    if(promedio >= 6.0){
        alert(` ${nombre} está aprobado con excelencia.`);
    } else if(promedio >= 4.0 && promedio < 6.0){
        alert(` ${nombre} está aprobado.`);
    } else {
        alert(` ${nombre} está reprobado.`);
    }
    if(nota1 < 2.0 || nota2 < 2.0 || nota3 < 2.0){
        alert(` ${nombre} debe asistir a reforzamiento.`);
    }
}