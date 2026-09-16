const cards = document.querySelectorAll(".glass-card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const bounds = card.getBoundingClientRect();

        const percentX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const percentY = (event.clientY - bounds.top) / bounds.height - 0.5;

        const rotateY = percentX * 18;
        const rotateX = percentY * -18;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    card.addEventListener("click", () => {
        const isFlipped = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", String(isFlipped));
    });
});