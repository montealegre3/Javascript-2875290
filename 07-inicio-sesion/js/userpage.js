const container = document.querySelector('.container')

seriesAnimadas.forEach( element => {
    let card = document.createElement('div');

    card.innerHTML = `
    <div class="container">
        <div class="card1">
            <img src="${element.imagen}" alt="animaniacs(serie)">
            <div class="intro">
                <h1>${element.nombre}</h1>
                <p>Año: ${element.year}</p>
                <p>Género: ${element.genero}</p>
                <p>Creador: ${element.creador}</p>
                <p>Temporadas: ${element.numeroDetemporadas}</p>
                <p>Episodios: ${element.numeroDeEpisodios}</p>
            </div>
        </div>
    </div> 
    `

    container.appendChild(card);
})

const saludo = document.querySelector('.saludo');

let nombreUser = JSON.parse(localStorage.getItem("usuario"));

saludo.innerHTML = `Hola ${nombreUser.userN}`