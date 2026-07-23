console.log(`conexión exitsa`)


let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};
//Accede al pan
console.log(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();

//Metodo del auto
let auto = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2023,
    encender:function(){
        console.log(
            "Encendiendo",
            this.marca,
            this.modelo
        );
    }
};

//Metodo de la casa
let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        console.log(
            this.direccion
        );
    }
};
