let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let errorMsg = document.getElementById("errorMsg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("descriptionText");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addBtn");


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    formValidation();
});

let formValidation = ()=> {
    if(textInput.value === "") {
        errorMsg.innerHTML = "Invalid input!"
    } else {
        errorMsg.innerHTML = "";
        acceptdata();
        addBtn.setAttribute("data-bs-dismiss","modal");
        addBtn.click();

        (()=> {
            addBtn.setAttribute("data-bs-dismiss","");
        })()
    }
}

let data = {};

let acceptdata = () => {

    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["textarea"] = textarea.value;

    createTask();
}


let createTask = () => {
    tasks.innerHTML += `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="text-secondery">${data.date}</span>
    <p>${data.textarea}</p>
    <span class="options">
        <i data-bs-toggle="modal" data-bs-target="#form" onClick="editText(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteTask(this)" class="fa-sharp fa-solid fa-trash"></i>
    </span>
    </div>`

    resetForm();
}

let resetForm = () => {
    textInput.value = "";
    dateInput = "";
    textarea.value = "";
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let editText = (e) => {
    let selected = e.parentElement.parentElement;

    textInput.value = selected.children[0].innerHTML;
    dateInput.value = selected.children[1].innerHTML;
    textarea.value = selected.children[2].innerHTML;
    
    selected.remove();
}