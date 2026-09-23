const slides = document.querySelectorAll(".project-carousel__slide");
const dotsContainer = document.querySelector(".project-carousel__dots");
const previousButton = document.querySelector(
  ".project-carousel__button--previous"
);
const nextButton = document.querySelector(
  ".project-carousel__button--next"
);

let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  dotsContainer.children[currentIndex].classList.remove("active");

  currentIndex = index;

  slides[currentIndex].classList.add("active");
  dotsContainer.children[currentIndex].classList.add("active");
}

slides.forEach((slide, index) => {
  const dot = document.createElement("button");

  dot.classList.add("project-carousel__dot");
  dot.setAttribute("aria-label", `Go to project ${index + 1}`);

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    showSlide(index);
  });

  dotsContainer.appendChild(dot);
});

nextButton.addEventListener("click", () => {
  let newIndex = currentIndex + 1;

  if (newIndex >= slides.length) {
    newIndex = 0;
  }

  showSlide(newIndex);
});

previousButton.addEventListener("click", () => {
  let newIndex = currentIndex - 1;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  showSlide(newIndex);
});