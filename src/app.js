import "./style.css";
window.onload = function() {};

const OnlyLetters = /^[A-Za-z\s*]+$/;
const OnlyNumbers = /^[0-9]+$/;
const mail_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector(".myForm");
const alerta = document.querySelector(".div_alert");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repPass = document.querySelector("#repPass");
const ButtonSubmit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".inputs");

const InvToVal = v => {
  v.classList.remove("isinvalid");
  v.classList.add("isvalid");
};

const ValtoInv = v => {
  v.classList.remove("isvalid");
  v.classList.add("isinvalid");
};

name.addEventListener("focusout", e => {
  if (name.value.match(OnlyLetters)) {
    InvToVal(name);
  } else {
    ValtoInv(name);
  }
});

surname.addEventListener("focusout", e => {
  if (surname.value.match(OnlyLetters)) {
    InvToVal(surname);
  } else {
    ValtoInv(surname);
  }
});
age.addEventListener("focusout", e => {
  if (age.value.match(OnlyNumbers)) {
    InvToVal(age);
  } else {
    ValtoInv(age);
  }
});
email.addEventListener("focusout", e => {
  if (email.value.match(mail_format)) {
    InvToVal(email);
  } else {
    ValtoInv(email);
  }
});

password.addEventListener("focusout", e => {
  if (password.value.length > 7) {
    InvToVal(password);
  } else {
    ValtoInv(password);
  }
});

repPass.addEventListener("focusout", e => {
  if (repPass.value == password.value && password.value.length > 7) {
    InvToVal(repPass);
  } else {
    ValtoInv(repPass);
  }
});

const submit = v => {
  v.classList.contains("isvalid");
};
form.addEventListener("submit", e => {
  e.preventDefault();
  if (
    name.classList.contains("isvalid") &&
    surname.classList.contains("isvalid") &&
    age.classList.contains("isvalid") &&
    email.classList.contains("isvalid") &&
    password.classList.contains("isvalid") &&
    repPass.classList.contains("isvalid")
  ) {
    console.log("se ha enviado");
    alert("Gracias por tu tiempo!");
    alerta.classList.replace("dblock", "dnone");
  } else {
    alerta.classList.replace("dnone", "dblock");
  }
});
