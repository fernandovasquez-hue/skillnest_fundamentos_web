console.log(`conexión exitsa`)
/* Ejemplo Bucle for*/
function contarHasta2() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
let usuarios = ["Ana", "Luis", "María", "Fernando", "Xavier"];

function recorrerLista() {
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo Bucle while*/
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos.... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validorContrasena() {
    let contraseñaCorrecta = false;

    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }

}