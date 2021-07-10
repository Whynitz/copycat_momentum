const TODOS_KEY = "todos";

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li"); // todo span + delete button
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(item) {
    return item !== 4;
}

console.log([1,2,3,4].filter(sexyFilter));