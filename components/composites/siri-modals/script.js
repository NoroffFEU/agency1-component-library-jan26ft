"use strict";

//getting components

const deleteBtn = document.querySelector("#deleteBtn");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const dialogBox = document.querySelector("#dialogBox");

//delete button - hides delete button - shows dialogBox

deleteBtn.addEventListener("click", function () {
  deleteBtn.style.display = "none";
  dialogBox.style.display = "flex";
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
});

//yes button - hides dialogBox - shows popup - goes back to delete button

yesBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
  alert("Account deleted!");
  deleteBtn.style.display = "inline-block";
});

// no button - hides dialogBox - shows delete button

noBtn.addEventListener("click", function () {
  dialogBox.style.display = "none";
  deleteBtn.style.display = "inline-block";
});

//dialogbox closes on esc key

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dialogBox.style.display = "none";
    deleteBtn.style.display = "inline-block";
  }
});
