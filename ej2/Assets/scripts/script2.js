// DOM elements
const input1 = document.querySelector("#in-1");
const input2 = document.querySelector("#in-2");
const input3 = document.querySelector("#in-3");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");
// Vars

//functions

// Events
btn.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;

  const total = Number(value1) + Number(value2) + Number(value3);
  if (total >= 10) {
    document.getElementById("result").innerHTML = "llevas muchos stickes";
  } else {
    document.getElementById("result").innerHTML = total + " stickers en total";
  }
});
