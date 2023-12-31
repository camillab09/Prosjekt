// Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

const menuSlide = document.getElementById("menuSlide");

function hamburger() {
  if (menuSlide.classList.contains("sidebar")) {
    menuSlide.classList.remove("sidebar");
    menuSlide.classList.add("sidebar-active");
  } else {
    menuSlide.classList.remove("sidebar-active");
    menuSlide.classList.add("sidebar");
  }
}

function carousel(button) {
  const offset = button.dataset.carouselButton === "next" ? 1 : -1;
  const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function autoRotate() {
  const nextBtn = document.querySelector("[data-carousel-button='next']");
  carousel(nextBtn);
}

let intervalId = setInterval(autoRotate, 5000);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(autoRotate, 5000);
    carousel(button);
  });
});

// Scroll buttons

const manifesto = document.getElementById("scrollto");

function scrollArrow() {
  window.scrollTo({ top: 500, behavior: "smooth" });
}

function scrollDown() {
  manifesto.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
