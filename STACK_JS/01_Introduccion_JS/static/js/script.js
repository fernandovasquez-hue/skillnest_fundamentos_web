console.log("conexion exitosa con JS ...")
function cambiarTexto() {
    let titulo = "Hola, bienvenido"
    if (document.getElementById("titulo").innerText == titulo) {
        document.getElementById("titulo").innerText = "Has cambiado el texto con JS";
        document.getElementById("titulo").style.color = "red";
    } else {
        document.getElementById("titulo").innerText = "Hola, bienvenido";
        document.getElementById("titulo").style.color = "green"
    }
}