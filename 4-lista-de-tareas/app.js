const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

document.getElementById("add-btn").addEventListener("click", Nuevatarea);
addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        Nuevatarea()
    }
})

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
    SVGAnimatedPreserveAspectRatio()
}

// guardar datos en localLStorage

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}


listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

// Recuperar datos de almacenamiento local 

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}

showTask()



