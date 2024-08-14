const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const buscador = document.querySelector("#buscador");
const textoBusqueda = document.querySelector("#textoBusqueda");
const listaStatus = document.querySelector("#listaStatus");
let results;


function pintar (elemento){
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

function filtrar(e) {

    e.preventDefault()
  
    container.innerHTML = ""
  
    const filtro = results.filter( word => word.status == listaStatus.value);
  
    console.log(filtro)
  
    filtro.forEach(element => {
  
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
  
  buscador.addEventListener('submit',filtrar)
  


let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(response => response.json())
.then(data => {

    results = data.results;

    /* const result = data.result.filter( word => word.status == listaStatus.value);
    console.log(result)

    data.results.forEach(element => {
        console.log(data.results)
        const card = document.createElement('div')
        card.classList.add("card");
        container.appendChild(card)

        card.innerHTML = ` 
            <img src="${element.image}" width= "200px">
            <div class="info">
            <h1>${element.name}</h1>
            <div class="section">
            <div class="circle "${element.status === 'Alive' ? "green": "red"}></div>
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
    }); */
}
)





