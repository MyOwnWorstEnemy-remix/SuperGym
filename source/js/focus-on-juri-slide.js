const slides = document.querySelectorAll('.slider-juri__slide');

const showSlideOverlay = (slide) => {
  const name = slide.querySelector('.slider-juri__name');
  const overlay = slide.querySelector('.slider-juri__overlay');
  overlay.style.display = 'block';
  name.style.display = 'none';
};

const hideSliderOverlay = (slide) => {
  const name = slide.querySelector('.slider-juri__name');
  const overlay = slide.querySelector('.slider-juri__overlay');
  overlay.style.display = 'none';
  name.style.display = 'block';
};

slides.forEach((slide) => {
  slide.addEventListener('focus', () => {
    slides.forEach((slideItem) => {
      hideSliderOverlay(slideItem);
    });
    showSlideOverlay(slide);
  });

  slide.addEventListener('blur', () => {
    hideSliderOverlay(slide);
  });

  slide.addEventListener("mouseover", () => {
    showSlideOverlay(slide);
  });

  slide.addEventListener("mouseout", () => {
    hideSliderOverlay(slide);
  });
});
