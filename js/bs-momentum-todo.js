const todoForm = document.querySelector(".todo-list__form");
const todoInput = document.querySelector(".todo-list__input");
const todoList = document.querySelector(".todo-list__list");
const todoListWrapper = document.querySelector(".todo-list__wrapper");

const TODOS_KEY = "todos";

let todoArray = [];

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArray.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  li.classList.add("todolist__item");
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-trash-alt");
  i.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(i);
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  todoArray = JSON.parse(savedToDos);
  todoArray.forEach(paintTodo);
} else {
}
