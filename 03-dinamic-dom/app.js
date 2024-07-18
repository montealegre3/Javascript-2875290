const listaColores = document.querySelector('#listaColores');
const btnCrear = document.querySelector('#btnCrear');
const main = document.querySelector('#main'); 

function crear (){
    
    const ball = document.createElement('div'); 
    ball.innerText = "pelota";
    ball.classList.add('pelota');
    ball.style.backgroundColor = listaColores.value;

    main.appendChild(ball);


    console.log(ball)

}

btnCrear.addEventListener('click', crear)