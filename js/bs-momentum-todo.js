const todoForm = document.querySelector(".todo-list__form");
const todoInput = document.querySelector(".todo-list__input");
const todoList = document.querySelector(".todo-list__list");

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
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const i = document.createElement("i");
  i.classList.add("far fa-trash-alt");
}
