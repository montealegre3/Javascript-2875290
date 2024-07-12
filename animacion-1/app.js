const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');

function moverSol(){
    sol.style.animation = "move 5s linear"
    solGuia.style.animation = "move 5s linear"
    console.log('ejecutando')
}

solGuia.addEventListener('click', moverSol)
