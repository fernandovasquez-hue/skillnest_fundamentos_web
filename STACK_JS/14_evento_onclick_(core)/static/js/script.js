console.log(`Conexión exitosa con JS!`)

/* Boton para iniciar sesión */
let boton = document.getElementById("button_sesion");

boton.addEventListener("click", function () {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});

/*Boton para ver perfil */
function mensaje() {
    alert(`Bienvenido de vuelta.
        \nTienes 3 mensajes pendientes y 2 codigos sin revisar`)
}

/*Botones para dar like */
let botonesLike = document.querySelectorAll("#boton_like");

botonesLike.forEach(function (boton) {
    boton.addEventListener("click", function () {
        let contador = parseInt(this.innerText);
        contador++;
        this.innerText = `${contador} Me gusta`;
    });
});
