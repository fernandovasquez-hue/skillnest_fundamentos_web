console.log(`conexión exitsa`)

function hamburguesaEspecial() {
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
            alert(`Pan: ${this.pan}
            \nCarne: ${this.carne}
            \nQueso: ${this.queso}
                \nExtras: ${this.extras.join(", ")}`
            );
        }
    };
    //Accede al pan
    console.log(hamburguesaEspecial.pan)
    hamburguesaEspecial.mostrarIngredientes();
}
//Metodo del auto
function piezasDeAuto() {
    let auto = {
        auto: "Honda Civic",
        modelo: "EJ1 Coupé (1993)",
        motor: "Spoon Engines",
        turbo: "T66 Turbo",
        oxidoNitroso: "NOS",
        escape: "Motec system exhaust",
        extras: [
            "Wings West",
            "Aleron aluminio estilo R33 GT-R",
            "LLantas Axis Se7ven de 17 o 18 pulgadas",
            "Suspensión TEIN Flex Z/ Street Advance Z"
        ],
        piezasDeAuto: function () {
            alert(
                `Auto: ${this.auto}
            Motor: ${this.modelo}
            Turbo: ${this.turbo}
            Oxído Nitroso: ${this.oxidoNitroso}
            Escape: ${this.escape}
            Extras: ${this.extras.join(" - ")}`
            );
        }
    };
    auto.piezasDeAuto()
}

//Metodo de la casa
function mostrarInformacionCasa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        mostrarInformacion: function () {
            alert(`Dirección: ${this.direccion}
            \nHabitaciones: ${this.habitaciones}
            \nBaños: ${this.baños}`)
        }
    };
    casa.mostrarInformacion();
}
