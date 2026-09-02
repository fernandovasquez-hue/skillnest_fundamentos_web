console.log("Conexión exitosa con JS")
const cajaDemostracion = document.getElementById("demostracion")

const cambioImagen = document.getElementById("pintura")

const textoInformacion = document.getElementById("informacion")

cajaDemostracion.addEventListener("mouseover", function () {
    cambioImagen.src = "static/images/noche-estrellada-sobre-el-ródano.png"
    textoInformacion.textContent = "La noche estrellada, Vincent van Gogh (1889)"
});

cajaDemostracion.addEventListener("mouseout", function () {
    cambioImagen.src = "static/images/campo-de-trigo-con-cipreses.png"
    textoInformacion.textContent = "Campo de trigo con cipreses, Vincent van Gogh (1889)"
});

const botonInicioSesion = document.getElementById("inicioSesion")

botonInicioSesion.addEventListener("click", function() {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
        this.style.backgroundColor = "#000";
        this.style.color = "#ffe4a4";
        this.style.border = "2px solid #ffe4a4"
    } else {
        this.innerText = "Iniciar sesión";
        this.style.backgroundColor = "#ffe4a4"; // Color estado inicial
        this.style.color = "#000000";
    }
});