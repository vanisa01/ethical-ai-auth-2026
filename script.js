const slides = Array.from(document.querySelectorAll('.slide'));
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');
const progressBar = document.getElementById('progressBar');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let activeIndex = 0;

function updateSlide(index) {
  activeIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, position) => {
    slide.classList.toggle('is-active', position === activeIndex);
  });

  currentSlide.textContent = String(activeIndex + 1);
  totalSlides.textContent = String(slides.length);
  progressBar.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
  document.title = `${slides[activeIndex].dataset.title} · Ethical Programming and Ethical AI`;
  globalThis.location.hash = `slide-${activeIndex + 1}`;
}

function nextSlide() {
  updateSlide(activeIndex + 1);
}

function prevSlide() {
  updateSlide(activeIndex - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

document.addEventListener('keydown', (event) => {
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    nextSlide();
  }

  if (['ArrowLeft', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    prevSlide();
  }

  if (event.key.toLowerCase() === 'f') {
    document.documentElement.requestFullscreen?.();
  }
});

const hashMatch = /slide-(\d+)/.exec(globalThis.location.hash);
if (hashMatch) {
  const requestedIndex = Number(hashMatch[1]) - 1;
  if (!Number.isNaN(requestedIndex) && requestedIndex >= 0 && requestedIndex < slides.length) {
    activeIndex = requestedIndex;
  }
}

updateSlide(activeIndex);