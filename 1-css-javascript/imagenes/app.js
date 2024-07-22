const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');
const nube1 = document.querySelector('.uno');
const nube2 = document.querySelector('.dos');
const nube3 = document.querySelector('.tres');
const nube4 = document.querySelector('.cuatro');
const fondo = document.querySelector('.container')


function moverSol(){
    sol.style.animation = "move 5s linear"
    solGuia.style.animation = "move 5s linear"
    sol.style.backgroundColor = "white"
    console.log('ejecutando')
}
function moverNube1(){
    nube1.style.animation = "move1 5s linear"
    nube2.style.animation = "move2 6s linear"
    nube3.style.animation = "move3 7s linear"
    nube4.style.animation = "move4 7s linear"
    
    
}
function cambiarFondo(){
    fondo.style.backgroundColor = "blue"
}

solGuia.addEventListener('click', moverSol)
nube2.addEventListener('click', moverNube1)
fondo.addEventListener('click', cambiarFondo)


