"use strict";

const textReceive = document.querySelector("#text");
const boxContainer = document.querySelector(".type-container");
const textContainer = document.querySelector(".text-container");
const submitBtn = document.querySelector("button");
const resetButton = document.querySelector(".btn-reset");
const alertMsg = document.querySelector(".alert");
const checkbox = document.querySelector("#checkbox");

const renderText = function (text) {
  const html = `
    <div class="text-container">
        <hr />
        <div class="container" >
            <h1>${text}</h1>
        </div>
    </div>
    `;
  boxContainer.insertAdjacentHTML("afterend", html);
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (textReceive.value === "") {
    textReceive.classList.add("active");
    alertMsg.classList.add("active");
  } else {
    textReceive.classList.remove("active");
    alertMsg.classList.remove("active");

    renderText(textReceive.value);
  }
});
resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
