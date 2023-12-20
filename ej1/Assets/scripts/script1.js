// DOM elements
const img = document.querySelector("img");

// Vars
var state = false;
//functions

// Events
img.addEventListener("click", () => {
  console.log("Click en la imagen");
  if (state == false) {
    document.getElementById("Ferrari").classList.add("border");
    state = true;
  } else {
    document.getElementById("Ferrari").classList.remove("border");
    state = false;
  }
});
