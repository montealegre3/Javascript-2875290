// Constantes 

const inputBox = document.getElementById('input-box'); //Constante del input
const listContainer = document.getElementById('list-container'); //Constante del container
const btnBorrar = document.getElementById('borrar-btn') //Constante del boton borrar todo



//Funciones 

function Nuevatarea(){ //Función para las nuevas tareas
    if(inputBox.value == ""){
        alert("Crea tu tarea") //Si el input está vacío y el usuario da click en el boton agregar, aparece una alerta "Crea tu tarea" 
    }else{ // Sino se crean la siguientes variables 
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        let span= document.createElement("span");
        span.innerHTML= "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    } //Condicional para la función
    inputBox.value = "";
    saveData()
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function mostrarTarea(){
    listContainer.innerHTML= localStorage.getItem("data")
}

mostrarTarea()

function limpiarTareas(){
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
}



//Eventos 

document.getElementById("add-btn").addEventListener("click", Nuevatarea);
addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        Nuevatarea()
    }
})

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

btnBorrar.addEventListener('click', limpiarTareas); //Evento del boton borrar todo





