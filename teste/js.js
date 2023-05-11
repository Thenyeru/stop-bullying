const carouselWrapper = document.querySelector('.carousel_wrapper');
const carouselSlides = document.querySelectorAll('.carousel_slide');
const carouselPrev = document.querySelector('.carousel_prev');
const carouselNext = document.querySelector('.carousel_next');
let currentSlide = 0;

function moveSlides() {
  carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

carouselPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselSlides.length - 1;
  }
  moveSlides();
});

carouselNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > carouselSlides.length - 1) {
    currentSlide = 0;
  }
  moveSlides();
});
