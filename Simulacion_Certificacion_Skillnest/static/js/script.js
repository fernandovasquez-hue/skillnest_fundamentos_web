console.log("Conexión exitosa con JS")

const cambioImagen = document.querySelector("#producto")

cambioImagen.addEventListener("mouseover", function () {
    cambioImagen.src = "static/image/comida-mexicana2.jpg"
});

cambioImagen.addEventListener("mouseout", function () {
    cambioImagen.src = "static/image/comida-mexicana.jpg"
})

function Bienvenido() {
    const texto = document.getElementById(`correo`).value;

    alert("¡Bienvenido! Tu correo es: " + texto);
}