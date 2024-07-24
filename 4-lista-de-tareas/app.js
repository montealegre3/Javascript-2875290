// Constantes 

const inputBox = document.getElementById('input-box'); //Constante del input
const listContainer = document.getElementById('list-container'); //Constante del container
const btnBorrar = document.getElementById('borrar-btn') //Constante del boton borrar todo



//Funciones 

function Nuevatarea(){
    if(inputBox.value == ""){
        alert("Crea tu tarea")
    }else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        let span= document.createElement("span");
        span.innerHTML= "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
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



