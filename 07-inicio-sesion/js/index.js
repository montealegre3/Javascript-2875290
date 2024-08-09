const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const formulario = document.querySelector('#formulario1'); 

function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("usuario"));
    console.log(currentUser.userN);
    console.log(currentUser.userP);


    console.log(Boolean(userName.value === currentUser.userN));
    console.log(Boolean(password.value === currentUser.userP));

    if(userName.value === currentUser.userN && password.value === currentUser.userP){
        window.location = "./vistas/userpage.html"
    }else{

    }
    formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)


