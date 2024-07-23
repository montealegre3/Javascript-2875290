const listaColores = document.querySelector('#listaColores');
const btnCrear = document.querySelector('#btnCrear');
const main = document.querySelector('#main'); 
const btnBorrar = document.querySelector('#btnBorrar');
let n = 1; 

function crear (){
    
    const ball = document.createElement('div'); 
    const equis = document.createElement('button');

    equis.innerText = 'x';
    equis.classList.add('equis');


    ball.classList.add('pelota');
    ball.style.backgroundColor = listaColores.value;
    ball.innerText = n++;
    
    ball.appendChild(equis);


    console.log(equis)

    main.appendChild(ball);
    console.log(ball)

}

function borrarPantalla (){
    main.innerHTML = '';
    n = 1;
}
function borrarElemento (e){
    console.log('Le di click a la pelota: ' + e.target.innerText)

    if(e.target.innerText == 'x'){
        main.removeChild(e.target.parentElement);
        console.log(e.target)
    }
}
function completarTarea (e){
    e.target.style.textDecoration = 'line-through';
}




btnCrear.addEventListener('click', crear);
btnBorrar.addEventListener('click', borrarPantalla);
main.addEventListener('click', borrarElemento);
main.addEventListener('click', completarTarea);