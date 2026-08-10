// Seleccionamos el botón por su id
let boton1 = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton1.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    this.innerText = "¡Texto cambiado!";
});

let boton2 = document.getElementById("miBoton");
let titulo = document.getElementById("miTitulo");

boton2.addEventListener("click", function () {
    titulo.innerText = "¡Nuevo título principal!";
});

let boton3 = document.getElementById("cambiarTexto2");

let textoOriginal = "Haz clic aquí";
let textoNuevo = "¡Texto cambiado!";

boton3.addEventListener("click", function () {
    if (this.innerText === textoOriginal) {
        this.innerText = textoNuevo;
    } else {
        this.innerText = textoOriginal;
    }
});