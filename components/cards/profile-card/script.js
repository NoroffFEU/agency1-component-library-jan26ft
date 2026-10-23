const contactButton = document.querySelector(".profile-card__button");

const originalText = contactButton.textContent.trim();

contactButton.addEventListener("click", async () => {
    const email= contactButton.dataset.email;

try {
    await navigator.clipboard.writeText(email);

    contactButton.textContent ="e-mail copied!";
} catch (error) {
    contactButton.textContent = email;
}

setTimeout(() => {
    contactButton.textContent = originalText;
}, 2000);
});