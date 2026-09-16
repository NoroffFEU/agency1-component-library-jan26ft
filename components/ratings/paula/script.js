const raviolis = document.querySelectorAll('#rating1 .rating__ravioli');
const ratingValue = document.getElementById('ratingValue');
let currentRating = 0;

function updateRating(rating) {
    raviolis.forEach((ravioli, index) => {
        ravioli.classList.toggle('active', index < rating);
    });
}

raviolis.forEach((ravioli, index) => {
    ravioli.addEventListener('mouseenter', () => updateRating(index + 1));
    ravioli.addEventListener('mouseleave', () => updateRating(currentRating));
    ravioli.addEventListener('focus', () => updateRating(index + 1));
    ravioli.addEventListener('blur', () => updateRating(currentRating));
    ravioli.addEventListener('click', () => {
        currentRating = index + 1;
        updateRating(currentRating);
        ratingValue.textContent = currentRating;
    });
});