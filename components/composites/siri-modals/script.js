"use strict";

const deleteBtn = document.querySelector("#deleteBtn");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const dialogBox = document.querySelector("#dialogBox");

// Open modal
deleteBtn.addEventListener("click", function () {
  dialogBox.showModal();
});

// Confirm delete
yesBtn.addEventListener("click", function () {
  dialogBox.close();
  alert("Account deleted!");
});

// Close modal
noBtn.addEventListener("click", function () {
  dialogBox.close();
});

// Close modal when clicking the backdrop
dialogBox.addEventListener("click", function (event) {
  if (event.target === dialogBox) {
    const rect = dialogBox.getBoundingClientRect();

    const clickedInside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!clickedInside) {
      dialogBox.close();
    }
  }
});

// Return focus to the trigger button when modal closes
dialogBox.addEventListener("close", function () {
  deleteBtn.focus();
});