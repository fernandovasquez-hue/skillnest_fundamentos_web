console.log(`conexión exitosa`)

//Variables a lista

let nombre1 = "Ana"
let nombre2 = "Pedro"
let nombre3 = "María"
let nombre4 = "Carlos"

//Transformar en array y mostrar

let nombres = ["Ana", "Pedro", "María", "Carlos"]

//Mostrar a María en una alerta

console.log(nombres[2]);
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"]
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"]
//Desafío formar una oraccion con elementos
// de las distintas variables
//pedro tiene 18 años y compro una sandia que le costo 2300 pesos
let mensaje = `${alumnos[1]} tiene ${datos[1]} años y compro una ${frutas[3]} que le costo ${compras[1]} pesos`;
console.log(mensaje)

//La propiedad .length devuelve la cantidad de elementos.

let Frutas = ["Manzana", "Pera", "Kiwi", "Sandía"]
let ultima = frutas[frutas.length - 1]
//Variable.length -1 siempre trae el ultimo elemento

console.log(ultima)

//desafio
//Del arreglo ["Hola", "a", "todos", "los", "programadores!"].
//Mostrar el penultimo elemento y el ultimo concatenado.

let frase = ["Hola", "a", "todos", "los", "programadores!"]
let oracion = `Hola a todos ${frase[frase.length - 2]} ${frase[frase.length - 1]}`

console.log(oracion)
let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
function manipularArreglo() {
    // Modificar un elemento del arreglos
    listaTareas[1] = "Construir";
    // Añadir un elemento al final de la lista
    listaTareas.push("Cocinar");
    // Eliminar el ultimo elemento y mostrarlo
    let eliminar = listaTareas.pop()
    // Añadir un elementos al inicio de la lista
    listaTareas.unshift("Boxear")
    // Eliminar el primer elemento de la lista
    eliminar += " - " + listaTareas.shift()
    // Mostrar resultados
    alert(listaTareas.join(" - "))
    alert(`Elementos eliminados: ${eliminar}`)
}

//Recorrer un arreglo
function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9]
    for (let i = 0; i < notas.length; i++) {
        alert(`Mostrando Nota ${i + 1} de ${notas.length}: ${notas[i]}`)
    }
}
//Sumar elementos dentro de un bucle
function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000]
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
    }
    console.log(total)
}
//calcular promedio
function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    alert(`El promedio de las notas: ${promedio}`);
}

//Condiciones
function Condiciones() {
    let edades = [12, 15, 18, 20, 25];
    let mayores = []
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayores.push(edades[i]);
        }
    }
    alert(`De la lista de edades : ${edades.join(' / ')}.
\nLos mayores son: ${mayores.join(' / ')}`)
}
//Encontrar el menor y el mayor
function buscarMayoresEdad() {
    let numeros = [10, 35, 7, 90, 22, 90]
    let menor = numeros[0];
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        } else if (numeros[i] > mayor) {
            mayor = numeros[i];
        } else {
            console.log(`Valor que no afecta: ${numeros[i]}`)
        }
    }
    alert(`De los numeros ${numeros.join(' / ')}
    El menor es: ${menor}
    El mayor es: ${mayor}`)
}
//Tarea: Unir los console.log en un alerta
//Eliminar el último valor y mostrarlo.
//Añadir dos valores nuevos con .push (prompt)
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayor = ventas[0];
    for(let i = 1; i <= 2; i++){
            ventas.push(parseInt(prompt(`Ingrese valor de la venta:`)));
    }
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
        }
    }
    console.log("Total:", total);
    console.log("Mayor:", mayor);
    console.log("Promedio:", total / ventas.length);
}

function buscarEdad() {
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {

    }
}

//-------------EJERCICIOS--------------------------------------------------------------------\\

function mostrarEdades() {
    let edades = [15, 18, 20, 14, 25];
    alert(`Primer edad: ${edades[0]}
        \nUltima edad: ${edades[4]}
        \ncantidad de edades: ${edades.length}`)
}

function listaNombres() {
    let listaNombres = ["Xavier", "Ariel", "Colque", "Estefano", "Alfredo"]
    for (let i = 0; i < listaNombres.length; i++) {
        alert(listaNombres[i])
    }
}