console.log(`conexión exitsa`)
// Ejemplo  Función simple (sin parametros)
function saludar(/*parametros*/) {
    alert("¡Hola, bienvenido!");
}
saludar();//Ejecución de una función
saludar();
saludar();
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludar("Luis");
saludar("Ana");
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}