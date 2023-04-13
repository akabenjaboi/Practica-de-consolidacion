
function mostrarDiv() {
    document.getElementById("resultado").style.display = "block";
}



// Obtener el elemento de selección
var select = document.getElementById("opciones");

// Hacer una solicitud a la API
fetch("https://digimon-api.vercel.app/api/digimon/")
    .then(response => response.json())
    .then(data => {
        // Crear elementos de opción y agregarlos al elemento de selección
        data.forEach(item => {
            var option = document.createElement("option");
            option.text = item.name;
            option.value = item.name;
            select.appendChild(option);
        });
    });





const form = document.getElementById("buscador");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const digimon = document.getElementById("opciones").value;

    console.log(digimon)
    const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;





    try {
        const response = await fetch(url);
        const data = await response.json();

        resultado.innerHTML = `
            <img src="${data[0].img}" class="card-img-top" alt="${data[0].name}" />
            <h2 class="card-tittle">${data[0].name}</h2>
            <p>nivel: ${data[0].level}</p>
            
        `;
    } catch (error) {
        console.error(error);
        resultado.innerHTML = `<p>No se encontró el Digimon.</p>`;
    }
});




/*

var card = document.querySelector("#resultado")
var boton = document.getElementById("boton")
$(document).ready(function () {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(datos => generador(datos))

    boton.addEventListener("click", () => {
        var digimon = document.getElementById("opciones").value;
        fetch("https://digimon-api.vercel.app/api/digimon/" + digimon)
            .then(response => response.json())
            .then(nuevosDatos => generador(nuevosDatos))
    })

    function generador(datos) {
        card.innerHTML = `<img src="${data[0].img}" class="card-img-top" alt="${data[0].name}" />
        <h2 class="card-tittle">${data[0].name}</h2>
        <p>nivel: ${data[0].level}</p>
        
        ;`
    }

});


*/

/*
const form = document.getElementById("buscador");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const digimon = form.elements.digimon.value;
    const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        resultado.innerHTML = `
            <img src="${data[0].img}" class="card-img-top" alt="${data[0].name}" />
            <h2 class="card-tittle">${data[0].name}</h2>
            <p>nivel: ${data[0].level}</p>
            
        `;
    } catch (error) {
        console.error(error);
        resultado.innerHTML = `<p>No se encontró el Digimon.</p>`;
    }
});

*/

