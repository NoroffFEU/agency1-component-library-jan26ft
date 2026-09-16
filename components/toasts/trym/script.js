var container = document.getElementById("toastContainer");
var triggerBtn = document.getElementById("triggerToast");

function showToast() {
  var toastOptions = [
    {
      type: "success",
      message: "Success! Your changes were saved.",
    },
    {
      type: "warning",
      message: "Warning! Please check your input.",
    },
    {
      type: "error",
      message: "Error! Something went wrong.",
    },
  ];

  var randomIndex = Math.floor(Math.random() * toastOptions.length);
  var randomToast = toastOptions[randomIndex];

  var toast = document.createElement("div");

  toast.classList.add("toast", randomToast.type);

  toast.innerHTML =
    '<span class="toast__message">' +
    randomToast.message +
    "</span>" +
    '<button class="toast__close">&times;</button>';

  container.appendChild(toast);

  var closeBtn = toast.querySelector(".toast__close");

  closeBtn.addEventListener("click", function () {
    toast.remove();
  });

  setTimeout(function () {
    toast.remove();
  }, 4000);
}

triggerBtn.addEventListener("click", function () {
  showToast();
});
