const container = document.querySelector('.container')
const buscador = document.querySelector('#buscador')
const textoBusqueda = document.querySelector('#textoBusqueda')
const listaStatus = document.querySelector('#listaStatus')


function mostrarResults(results) {
    results.forEach( element => {
        let card = document.createElement('div');
        card.classList.add("card")
    
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
}


mostrarResults(seriesAnimadas);

function filtrar(e) {
    e.preventDefault();
    container.innerHTML = "";

    let filtro = seriesAnimadas;

    if(listaStatus.value !== "todo"){
        filtro = seriesAnimadas.filter(seriesAnimadas => seriesAnimadas.genero.toString().toLowerCase().includes(listaStatus.value.toLowerCase())).filter(seriesAnimadas => seriesAnimadas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
        console.log(seriesAnimadas[1].genero.toString().toLowerCase())
        mostrarResults(filtro)
    }

    if(textoBusqueda.value) {
        filtro = filtro.filter(seriesAnimadas => seriesAnimadas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }

    mostrarResults(filtro);
}

buscador.addEventListener('submit', filtrar);