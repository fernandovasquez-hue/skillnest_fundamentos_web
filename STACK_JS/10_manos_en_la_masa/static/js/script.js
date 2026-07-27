console.log(`conexión exitsa`)

// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.

function pizzaOven() {
let pizza = {
    corteza: "corteza tradicional",
    salsa: "salsa tradicional",
    quesos: ["mozzarella"],
    ingredientes: ["pepperoni", "salchicha"]
};

function pizzaFactory(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza
    pizza.salsa = salsa
    pizza.quesos = quesos
    pizza.ingredientes = ingredientes
    return pizza;
}
let pizzaLanzada = pizzaFactory(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);
let pizzaVeggie = pizzaFactory(
    "delgada", 
    "pesto", 
    ["cabra"], 
    ["espinacas", "tomates"]
);
let pizzaBBQ = pizzaFactory(
    "con borde de queso", 
    "barbacoa", 
    ["mozzarella", "cheddar"], 
    ["pollo", "tocino"]
);
alert(
    `Ingredientes de la primera pizza:
    corteza: ${pizza.corteza}
    \nquesos: ${pizza.quesos}
    \nsalsa: ${pizza.salsa}
    \ningredientes: ${pizza.ingredientes}`
)
alert(`Ingredientes de la segunda pizza:
    corteza: ${pizzaLanzada.corteza}
    \nquesos: ${pizzaLanzada.quesos}
    \nsalsa: ${pizzaLanzada.salsa}
    \ningredientes: ${pizzaLanzada.ingredientes}`)
alert(`Ingredientes de la tercera pizza:
    corteza: ${pizzaVeggie.corteza}
    \nquesos: ${pizzaVeggie.quesos}
    \nsalsa: ${pizzaVeggie.salsa}
    \ningredientes: ${pizzaVeggie.ingredientes}`)
alert(`Ingredientes de la Cuarta pizza:
    corteza: ${pizzaBBQ.corteza}
    \nquesos: ${pizzaBBQ.quesos}
    \nsalsa: ${pizzaBBQ.salsa}
    \ningredientes: ${pizzaBBQ.ingredientes}`)
}