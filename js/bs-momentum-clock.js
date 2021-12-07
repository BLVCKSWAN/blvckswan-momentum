const clock = document.querySelector(".clock__time");
const today = document.querySelector(".clock__day");
const date = new Date();
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function genClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, 0);
  const day = String(date.getDate()).padStart(2, 0);
  const dayOfWeek = week[date.getDay()];
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hours}:${minutes}`;
  today.innerText = `${year}. ${month}. ${day} ${dayOfWeek}`;
}

genClock();
setInterval(genClock, 1000);
