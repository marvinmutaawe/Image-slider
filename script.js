
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Show slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Next
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Previous
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Button events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto slide
let autoSlide = setInterval(nextSlide, 3000);

// Pause on hover (desktop)
document.querySelector(".slider").addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

// Resume
document.querySelector(".slider").addEventListener("mouseout", () => {
  auto});
Slide = setInterval(nextSlide, 3000);


