const slides = document.querySelectorAll(".project-carousel__slide");
const dotsContainer = document.querySelector(".project-carousel__dots");
const previousButton = document.querySelector(
  ".project-carousel__button--previous",
);
const nextButton = document.querySelector(".project-carousel__button--next");

//added

const slideDuration = 5000;

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

//added autoplay function

function autoPlay() {
  autoPlayTimer = setInterval(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    showSlide(newIndex);
  }, slideDuration);
}

function resetInterval() {
  clearInterval(autoPlayTimer);
  autoPlay();
}

nextButton.addEventListener("click", () => {
  let newIndex = currentIndex + 1;

  if (newIndex >= slides.length) {
    newIndex = 0;
  }

  showSlide(newIndex);
  resetInterval();
});

previousButton.addEventListener("click", () => {
  let newIndex = currentIndex - 1;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }

  showSlide(newIndex);
  resetInterval();
});

//added arrow key navigation

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    let newIndex = currentIndex + 1;

    if (newIndex >= slides.length) {
      newIndex = 0;
    }

    showSlide(newIndex);
    resetInterval();
  }

  if (event.key === "ArrowLeft") {
    let newIndex = currentIndex - 1;

    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }

    showSlide(newIndex);
    resetInterval();
  }
});

autoPlay();

//added mobile swipe

const carousel = document.querySelector(".carousel-container");

let touchStart = 0;
let touchEnd = 0;
const swipeLength = 50;

function handleSwipe() {
  const distance = touchEnd - touchStart;

  if (Math.abs(distance) < swipeLength) {
    return;
  }

  if (distance < 0) {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    showSlide(newIndex);
    resetInterval();
  } else {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    showSlide(newIndex);
    resetInterval();
  }
}
carousel.addEventListener("touchstart", (event) => {
  touchStart = event.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (event) => {
  touchEnd = event.changedTouches[0].screenX;
  handleSwipe();
});
