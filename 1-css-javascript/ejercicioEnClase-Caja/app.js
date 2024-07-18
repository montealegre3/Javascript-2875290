// 1. Variables 

const miInput = document.querySelector('#text1');
const circulo = document.querySelector('#circulo');
const btnMover = document.querySelector('#btn');
let e =0;

// 2. Funciones 

function mover (){

    if (e == 0){
        circulo.style.marginLeft = '900px';  
        circulo.style.transitionDuration = '.5s'; 
        circulo.style.backgroundColor = text1.value;
        e=1;
    }else{
        circulo.style.marginLeft = '0px';
        circulo.style.transitionDuration = '.5s';
        e=0;
    }
        
    } 



// 3. Eventos 
btn.addEventListener('click', mover); 

