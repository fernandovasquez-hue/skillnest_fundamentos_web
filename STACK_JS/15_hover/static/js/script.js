const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "#12acff";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "#6d0606";
});

//Tarea
/*Crear dos botones con onmouseover y onmouseout
- Cambia el texto de un boton
- Cambier el color de fondo y color de texto del segundo boton.
*/
const textoDistinto = document.getElementById("textoCambiado");
textoDistinto.addEventListener("mouseover", function () {
    textoDistinto.textContent = "Si pasas el cursor en mi cambiara mi texto!"
});

textoDistinto.addEventListener("mouseout", function () {
    textoDistinto.textContent = "Ahora si sacas el cursor de mi cambiare de nuevo!"
});

const cambioColor = document.getElementById("cambiarColor");

cambioColor.addEventListener("mouseover", function () {
    cambioColor.style.backgroundColor = "#391196"
    cambioColor.style.color = "#ffffff"
});

cambioColor.addEventListener("mouseout", function () {
    cambioColor.style.backgroundColor = "#effd25"
    cambioColor.style.color = "#1d1a1a"
})