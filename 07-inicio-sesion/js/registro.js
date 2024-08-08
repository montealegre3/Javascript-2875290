const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1'); 

function registrarUsuario (e){
    e.preventDefault();

    let usuario = {
        userN: userName.value,
        userP: password.value,
    }


    localStorage.setItem("usuario", JSON.stringify(usuario)); 
    formulario.reset()
}

formulario.addEventListener("submit",registrarUsuario)