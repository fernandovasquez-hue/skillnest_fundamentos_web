console.log(`Conexión exitosa`)

document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarTextoColor();
});

function cambiarTextoColor() {
    let coloresTexto = ["#fc2b07", "#1de6a3", "#6219f3", "#00ff15", "#088efc", "#0717ff"];
    let colorAleatorioTexto = coloresTexto[Math.floor(Math.random() * coloresTexto.length)];
    document.body.style.color = colorAleatorioTexto;
}
// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    this.innerText = "¡Texto cambiado!";
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        // Eliminamos la imagen al hacer clic
        this.remove();
    });
});