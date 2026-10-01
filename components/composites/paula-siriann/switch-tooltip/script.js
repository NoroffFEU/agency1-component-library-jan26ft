const checkbox = document.getElementById("checkbox");
const toggle = document.getElementById("switch");

checkbox.addEventListener("change", function () {
  toggle.classList.toggle("active", checkbox.checked);
});

checkbox.addEventListener("focus", function () {
  toggle.classList.add("focused");
});

checkbox.addEventListener("blur", function () {
  toggle.classList.remove("focused");
});
