console.log(`Conexión exitosa`)

const colores = ["#ff6374","#66cdaa","#9370db","#ffd700","#4682b4","#ffa07a"];

function cambiarColor(elemento){
    if(!elemento) return;
    const colorAleatorio = colores[Math.floor(Math.random()* colores.length)];
    elemento.style.backgroundColor = colorAleatorio;
}


document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColor(document.body);
});

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor(document.querySelector("#caja1"));
});

document.getElementById("colorButton3").addEventListener("click", function (){
    cambiarColor(document.querySelector("#caja2"))
});
