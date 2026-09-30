const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown__button");
const dropdownMenu = document.querySelector(".dropdown__menu");

function isOpen() {
    return dropdownButton.getAttribute("aria-expanded") === "true";
}

function openMenu() {
    dropdownButton.setAttribute("aria-expanded", "true");
    dropdownMenu.hidden = false;
}

function closeMenu(returnFocus = false) {
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownMenu.hidden = true;

    if (returnFocus) {
        dropdownButton.focus();
    }
}

/* Toggle on click */

dropdownButton.addEventListener("click", () => {
    if (isOpen()) {
        closeMenu();
    }   else {
        openMenu();
    }
});

/* Escape closes the menu and puts the focus back on the button */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
        closeMenu(true);
    }
});

/* Clicking outside the component closes the menu */

document.addEventListener("click", (event) => {
    if (isOpen() && !dropdown.contains(event.target)) {
        closeMenu();
    }
});

/* Choosing an item closes the menu */

dropdownMenu.addEventListener("click", (event) => {
    if (event.target.closest(".dropdown__item")) {
        closeMenu(true);
    }
});

/* Tabbing out of the component closes the menu */

dropdown.addEventListener("focusout", (event) => {
    if (isOpen() && !dropdown.contains(event.relatedTarget)) {
        closeMenu();
    }
});