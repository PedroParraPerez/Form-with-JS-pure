import "./style.css";

window.onload = function() {};

const alert = document.querySelector("#alert");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repPass = document.querySelector("#repPass");

name.addEventListener("submit", e => {
  e.preventDefault();
  console.log(name);
  if (name.value.length >= 5) {
    console.log("es correcto");
  } else {
    console.log("no es correcto");
  }
});
