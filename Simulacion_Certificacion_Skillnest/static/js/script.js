console.log("Conexión exitosa con JS")

const cambioImagen = document.querySelector("#producto")

cambioImagen.addEventListener("mouseover", function () {
    cambioImagen.src = "static/image/comida-mexicana2.jpg"
});

cambioImagen.addEventListener("mouseout", function () {
    cambioImagen.src = "static/image/comida-mexicana.jpg"
})

const botonLogin = document.querySelector("#botonLogin")
const correoIngresado = document.querySelector("#correo")

botonLogin.addEventListener("click", function(){
    alert(`Bienvenid@ ${correoIngresado.value}`)
})

const botonAgregar = document.querySelector("#boton")
const botonAgregar2 = document.querySelector("#boton2")

const contadorPedidos = document.querySelector("#pedidos")

botonAgregar.addEventListener("click", function(){
    let i = parseInt(contadorPedidos.innerText);
        i++;
        contadorPedidos.innerText = `${i}`;
})
botonAgregar2.addEventListener("click", function(){
    let i = parseInt(contadorPedidos.innerText);
        i++;
        contadorPedidos.innerText = `${i}`;
})