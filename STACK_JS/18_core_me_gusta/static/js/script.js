console.log("Conexión exitosa con JS")

const botonesLikes1 = document.querySelector("#aumentadorLikes1")
const botonesLikes2 = document.querySelector("#aumentadorLikes2")
const botonesLikes3 = document.querySelector("#aumentadorLikes3")

const contadorLikes1 = document.querySelector("#likesPublicaion1")
const contadorLikes2 = document.querySelector("#likesPublicaion2")
const contadorLikes3 = document.querySelector("#likesPublicaion3")

botonesLikes1.addEventListener("click", function() {
        let i = parseInt(contadorLikes1.innerText);
        i++;
        contadorLikes1.innerText = `${i} like(s)`;
});

botonesLikes2.addEventListener("click", function() {
        let i = parseInt(contadorLikes2.innerText);
        i++;
        contadorLikes2.innerText = `${i} like(s)`;
});

botonesLikes3.addEventListener("click", function() {
        let i = parseInt(contadorLikes3.innerText);
        i++;
        contadorLikes3.innerText = `${i} like(s)`;
});