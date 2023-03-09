"use strict";

const textReceive = document.querySelector("#text");
const boxContainer = document.querySelector(".type-container");
const textContainer = document.querySelector(".text-container");
const submitBtn = document.querySelector("button");
const resetButton = document.querySelector(".btn-reset");
const alertMsg = document.querySelector(".alert");

const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, "0");
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const year = currentDate.getFullYear();
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
let amOrPm = "AM";

const renderText = function (text) {
  let hours = currentDate.getHours();
  let amOrPm = "AM";
  if (hours >= 12) {
    amOrPm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  hours = hours.toString().padStart(2, "0");
  const html = `
    <div class="text-container">
        <hr />
        <div class="output-container" >
            <h1>${text}</h1>
            <p>${hours}:${minutes}${amOrPm} ${day}/${month}/${year}</p>
        </div>
    </div>
    `;
  boxContainer.insertAdjacentHTML("afterend", html);
};

const handleSubmit = function (e) {
  e.preventDefault();
  if (textReceive.value === "") {
    textReceive.classList.add("active");
    alertMsg.classList.add("active");
  } else {
    textReceive.classList.remove("active");
    alertMsg.classList.remove("active");

    renderText(textReceive.value);
  }
};

submitBtn.addEventListener("click", handleSubmit);

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
