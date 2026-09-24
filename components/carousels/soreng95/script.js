var carousel = document.querySelector(".carousel");
var track = document.querySelector(".carousel__track");
var slides = document.querySelectorAll(".carousel__slide");
var dotsBox = document.querySelector(".carousel__dots");
var prevBtn = document.querySelector(".carousel__nav--prev");
var nextBtn = document.querySelector(".carousel__nav--next");

var currentIndex = 0;
var timer = null;
var delay = 4000;

for (var i = 0; i < slides.length; i++) {
  var dot = document.createElement("button");
  dot.type = "button";
  dot.className = "carousel__dot";
  dot.setAttribute("aria-label", "Go to slide " + (i + 1));
  dot.dataset.index = i;
  dotsBox.appendChild(dot);
}

var dots = document.querySelectorAll(".carousel__dot");

function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index > slides.length - 1) {
    index = 0;
  }

  currentIndex = index;
  track.style.transform = "translateX(-" + currentIndex * 100 + "%)";

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.toggle("is-active", i === currentIndex);
    dots[i].classList.toggle("is-active", i === currentIndex);
    dots[i].setAttribute("aria-current", i === currentIndex ? "true" : "false");
  }
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function startAuto() {
  stopAuto();
  timer = setInterval(nextSlide, delay);
}

function stopAuto() {
  clearInterval(timer);
  timer = null;
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dotsBox.addEventListener("click", function (event) {
  var dot = event.target.closest(".carousel__dot");
  if (!dot) {
    return;
  }
  goToSlide(Number(dot.dataset.index));
});

carousel.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    prevSlide();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextSlide();
  }
});

carousel.addEventListener("mouseenter", stopAuto);
carousel.addEventListener("mouseleave", startAuto);
carousel.addEventListener("focusin", stopAuto);
carousel.addEventListener("focusout", startAuto);

goToSlide(0);
startAuto();
