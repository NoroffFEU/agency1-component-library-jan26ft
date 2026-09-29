const fromName = document.getElementById("fromName");
const toName = document.getElementById("toName");
const toEmail = document.getElementById("toEmail");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".send-btn");

function updateButtonState() {
  const allFilled =
    fromName.value.trim() !== "" &&
    toName.value.trim() !== "" &&
    toEmail.value.trim() !== "" &&
    message.value.trim() !== "";

  sendBtn.disabled = !allFilled;
}

fromName.addEventListener("input", updateButtonState);
toName.addEventListener("input", updateButtonState);
toEmail.addEventListener("input", updateButtonState);
message.addEventListener("input", updateButtonState);

updateButtonState();

// btn spinner

const form = document.querySelector(".birthday-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (sendBtn.classList.contains("is-loading")) return;
  sendBtn.classList.add("is-loading");
  sendBtn.disabled = true;

  setTimeout(() => {
    sendBtn.classList.remove("is-loading");
    sendBtn.classList.add("is-success");

    setTimeout(() => {
      sendBtn.classList.remove("is-success");
      form.reset();
      updateButtonState();
    }, 2000);
  }, 2000);
});
