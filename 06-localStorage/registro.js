const formulario = document.querySelector('#formulario');
const nombreUsuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contrasena');


function registrarUser(e){
    e.preventDefault();


    //Registrar el dato de "user" en localStorage
    let user = {
    userName: nombreUsuario.value,
    userPass: contraseña.value,
}

    localStorage.setItem('user', JSON.stringify(user))

    formulario.reset();
}


formulario.addEventListener('submit', registrarUser)



