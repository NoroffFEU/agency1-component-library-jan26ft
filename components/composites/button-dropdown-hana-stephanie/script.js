const dropdownButton = document.querySelector(".dropdown__button");
const dropdownMenu = document.querySelector(".dropdown__menu");

/* Toggle the menu open and closed */

dropdownButton.addEventListener("click", () => {
    const isOpen = dropdownButton.getAttribute("aria-expanded") === "true";

    dropdownButton.setAttribute("aria-expanded", String(!isOpen));
    dropdownMenu.hidden = isOpen;
});