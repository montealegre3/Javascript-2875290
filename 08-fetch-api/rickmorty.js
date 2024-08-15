const container = document.querySelector(".container")
const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const listaStatus = document.querySelector("#listaStatus")
let results;

let url = "https://rickandmortyapi.com/api/character"
fetch(url)
  .then(response => response.json())
  .then(data => {
    results = data.results;
    mostrarResults(data.results)
  }
  )

function pintar(elemento) {

  switch (elemento) {
    case 'Alive':
      return 'green'
      break
    case 'Dead':
      return 'red'
      break
    default:
      return 'gray'
  }

}

function mostrarResults(result) {
  result.forEach(element => {

    const card = document.createElement('div')
    card.classList.add("card");
    container.appendChild(card)

    card.innerHTML = ` 
          <img src="${element.image}" width= "200px">
          <div class="info">
          <h1>${element.name}</h1>
          <div class="section">
          
          <div class="circle ${pintar(element.status)}"></div>
          <span class="estado">${element.status} - ${element.species} </span>
          </div>
          <div class="detalle">
              <p><strong>Última ubicación conocida:</strong><br>${element.location.name}</p>
              <p><strong>Visto por primera vez en:</strong><br>${element.origin.name}</p>
          </div>
      </div>
      </div>
      `
    container.appendChild(card)
  })
}

function filtrar(e) {

  e.preventDefault()

  container.innerHTML = ""

  if(listaStatus.value != "all"){
    const filtro = results.filter(word => word.status == listaStatus.value).filter( word => word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
    //textoBusqueda.value.toLowerCase() == word.name.toLowerCase()

    mostrarResults(filtro)
  }else{
    //""-> false    "content"->true
    if(textoBusqueda.value){

      const filtro = results.filter( word => word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
      mostrarResults(filtro)

    }else{
      mostrarResults(results)
    }

    textoBusqueda.value = ""
  }
}

buscador.addEventListener('submit', filtrar)






