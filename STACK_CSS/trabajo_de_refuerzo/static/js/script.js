console.log(`Conexión exitosa con JS`)

console.log(`Conexión exitosa`);

const colores = ["#ff6374", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a", "#ff007f", "#00ffff"];

// Variable para guardar el identificador del intervalo y saber si está activo
let discoIntervalo = null;

// Función base para cambiar color
function cambiarColor(elemento) {
    if (!elemento) return;
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = colorAleatorio;
}

// Función que activa o desactiva el modo Disco
function alternarModoDisco(elemento) {
    // Si ya está activo, lo detenemos
    if (discoIntervalo) {
        clearInterval(discoIntervalo);
        discoIntervalo = null;
        console.log("Modo disco detenido");
    } else {
        // Si no está activo, iniciamos el intervalo (ej. cambia cada 150 milisegundos)
        discoIntervalo = setInterval(function () {
            cambiarColor(elemento);
        }, 500); 
        console.log("Modo disco iniciado");
    }
}

// Evento para el botón de modo disco en el fondo (body)
document.getElementById("discoButton").addEventListener("click", function () {
    alternarModoDisco(document.body);
});