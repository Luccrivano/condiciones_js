// Elementos del DOM
const btn = document.querySelector("button");
const digit1 = document.getElementById("digito1");
const digit2 = document.getElementById("digito2");
const digit3 = document.getElementById("digito3");
const mjs = document.getElementById("mensaje");

// Variables

// Funciones

function pass() {
  let dj1 = digit1.value;
  let dj2 = digit2.value;
  let dj3 = digit3.value;
  let password = dj1 + dj2 + dj3;

  if (password == "911") {
    mjs.innerHTML = "Password 1 correcto";
  } else if (password == "714") {
    mjs.innerHTML = "Password 2 correcto";
  } else {
    mjs.innerHTML = "Password es incorrecto";
  }
}

//Eventos
btn.addEventListener("click", pass);
