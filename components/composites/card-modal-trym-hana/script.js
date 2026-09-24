const openButton = document.querySelector(".profile-card__button");
const closeButton = document.querySelector(".modal__close");
const modal = document.querySelector("#info-modal");

/* Open the modal */

openButton.addEventListener("click", () => {
    modal.showModal();
});

/* Close it with Close button */

closeButton.addEventListener("click", () => {
    modal.close();
});

/* Close it when clicking outside the modal box */

modal.addEventListener("click", (event) => {
    const box = modal.getBoundingClientRect();

    const clickedInside =
    event.clientX >= box.left &&
    event.clientX <= box.right &&
    event.clientY >= box.top &&
    event.clientY <= box.bottom;

    if (!clickedInside) {
        modal.close();
    }
});
