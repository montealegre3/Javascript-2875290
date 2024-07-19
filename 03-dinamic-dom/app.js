const listaColores = document.querySelector('#listaColores');
const btnCrear = document.querySelector('#btnCrear');
const main = document.querySelector('#main'); 
const btnBorrar = document.querySelector('#btnBorrar');
let n = 1; 

function crear (){
    
    const ball = document.createElement('div'); 
    ball.innerText = "pelota";
    ball.classList.add('pelota');
    ball.style.backgroundColor = listaColores.value;
    ball.innerText = n++;

    main.appendChild(ball);
    console.log(ball)

}

function borrarPantalla (){
    main.innerHTML = '';
    n = 1;
}
function borrarElemento (e){
    console.log('Le di click a la pelota: ' + e.target.innerText)
    main.removeChild(e.target);
}



btnCrear.addEventListener('click', crear);
btnBorrar.addEventListener('click', borrarPantalla);
main.addEventListener('click', borrarElemento);