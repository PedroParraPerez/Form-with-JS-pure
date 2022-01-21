import "./style.css";
window.onload = function() {};

const OnlyLetters = /^[a-z][a-z\s]*$/;
const form = document.querySelector(".myForm");
const alert = document.querySelector("#alert");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repPass = document.querySelector("#repPass");
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".inputs");

name.addEventListener("focusout", e => {
  if (name.value.match(OnlyLetters)) {
    name.classList.remove("isinvalid");
    name.classList.add("isvalid");
  } else {
    name.classList.remove("isvalid");
    name.classList.add("isinvalid");
  }
});
surname.addEventListener("focusout", e => {
  if (surname.value.match(OnlyLetters)) {
    surname.classList.remove("isinvalid");
    surname.classList.add("isvalid");
  } else {
    surname.classList.remove("isvalid");
    surname.classList.add("isinvalid");
  }
});
password.addEventListener("focusout", e => {
  if (password.value.length > 7) {
    password.classList.remove("isinvalid");
    password.classList.add("isvalid");
  } else {
    password.classList.remove("isvalid");
    password.classList.add("isinvalid");
  }
});

repPass.addEventListener("focusout", e => {
  if (repPass.value == password.value && password.value.length > 7) {
    repPass.classList.remove("isinvalid");
    repPass.classList.add("isvalid");
  } else {
    repPass.classList.remove("isvalid");
    repPass.classList.add("isinvalid");
  }
});
