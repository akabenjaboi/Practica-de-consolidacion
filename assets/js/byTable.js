var contenido = document.querySelector("#contenido");
var digimons = [];

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        digimons = datos;
        tabla(digimons);
    });

function tabla(datos) {
    contenido.innerHTML = ""
    var i = 1;
    for (let temp of datos) {
        contenido.innerHTML += `<tr data-digimon-id="${i}">
        <th scope="row">${i}</th>
        <td><img src=${temp.img} class="imgdigi"></td>
        <td>
        <a class="link-opacity-75" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="mostrarModal(${i - 1})">${temp.name}</a>
        </td>
        <td>${temp.level}</td>
        </tr>`
        i += 1;
    }
}

function mostrarModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    });

    var digimon = digimons[id];

    var modalTitle = document.querySelector('.modal-title');
    var modalBody = document.querySelector('.modal-body');

    modalTitle.innerHTML = digimon.name;
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${digimon.img}" class="img-fluid digimonModalImg">
            </div>
            <div class="col-md-6">
                <p><strong>Nivel:</strong> ${digimon.level}</p>
            </div>
        </div>
    `;

    myModal.addEventListener('hidden.bs.modal', function () {
        myModal.remove();
    });

    myModal.show();
}



