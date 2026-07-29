console.log(`conexión exitsa`)
// Ejemplo  Función simple (sin parametros)
function saludar(/*parametros*/) {
    alert("¡Hola, bienvenido!");
}
saludar();//Ejecución de una función
// saludar();
// saludar();
function saludarParam(nombre) {
    alert(`¡Hola, ${nombre}!`);
}
saludarParam("Fernando");
saludarParam("Estefano");

// 🎯 Funciones con return

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);

// Tarea
/*
Crear una funcion que reciba 3 parametros,a b y c.
Debe sumar a + b y elultimo resutado restarlo por c.
Devolver el valor final y mostrar con un alert
*/
let numeroA = parseInt(prompt(`Ingrese primer valor:`));
let numeroB = parseInt(prompt(`Ingrese segundo valor:`));
let numeroC = parseInt(prompt(`Ingrese tercer valor:`));
function ecuacionMatematica(a, b, c){
return a + b - c
}
alert(`El resultado de la ecuación es: ${ecuacionMatematica(numeroA, numeroB, numeroC)}`)
