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
function manipularArreglo(){
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

function buscarMayoresEdad(){
    let edades =[12, 15, 18, 20, 25];
    for(let i = 0; i < edades.length; i++){
        
    }
}