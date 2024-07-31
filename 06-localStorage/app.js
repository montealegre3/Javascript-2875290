/* let nombre = 'Jose'
let items = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
let pelicula = {
        id: 1,
        nombre: 'Animaniacs',
        year: 1993,
        genero: ['Dibujo animado', 'Sátira', 'Comedia'],
        creador: 'Tom Ruegger',
        numeroDetemporadas: 5,
        numeroDeEpisodios: 99,
        imagen: 'https://www.themoviedb.org/t/p/original/3tZHilDJ2d9AuCyjpm7YD8Zyhn4.jpg',
}

function agregarStorage (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem( key,JSON.stringify(value))
    }
}

agregarStorage('nombre', nombre)
agregarStorage('carrito', items)
agregarStorage('pelicula', pelicula)

function obtenerDatos (){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse( localStorage.getItem('carrito'))
    let peliculaUsuario = JSON.parse( localStorage.getItem('pelicula'))

    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach( element => {
        console.log(element)
    });

}
obtenerDatos()


function borrarItem (item){
    localStorage.removeItem(item)
}

/* borrarItem ('nombre')
borrarItem ('pelicula')
borrarItem ('carrito') */

/* function borrarTodo (){
    localStorage.clear()
}
borrarTodo () */ 

const form = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contrasena');
const btnIniciar = document.querySelector('#btn1');



