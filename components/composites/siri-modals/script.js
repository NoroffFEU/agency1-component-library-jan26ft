"use strict";

//getting components

const deleteBtn = document.querySelector("#deleteBtn");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const dialogBox = document.querySelector("#dialogBox");
const popUp = document.querySelector("#popUp");

//delete button - hides button - shows dialogBox

deleteBtn.addEventListener("click", function () {
  deleteBtn.style.display = "none";
  dialogBox.style.display = "flex";
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
});

//yes button - hides dialogBox - shows popup

yesBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
  popUp.style.display = "block";
});

// no button - hides dialogBox - shows delete button

noBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
  deleteBtn.style.display = "inline-block";
});
