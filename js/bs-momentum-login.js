const mainContainer = document.querySelector(".main-container");
const backGround = document.querySelector("#background img");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greetingBox = document.querySelector(".greeting-box");
const username = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const typename = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typename);
  paintingMain(typename);
}

function paintingMain(typename) {
  username.innerText = typename;
  backGround.classList.add("saturation");
  mainContainer.classList.remove(HIDDEN_CLASS);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLogin);
} else {
  paintingMain(savedUsername);
}
