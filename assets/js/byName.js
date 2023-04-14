function mostrarDiv(){
  document.getElementById("resultado").style.display = "block";
}

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




