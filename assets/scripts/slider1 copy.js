const prevBtn = document.getElementById("slide-prev");
const nextBtn = document.getElementById("slide-next");

const slideContainer = document.querySelector(".slider-container");
const slide = document.querySelector(".slides");

let slides = document.querySelectorAll(".slide");
let index = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

console.log(slides);

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(index);

const getSlide = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNext = () => {
  slides = getSlide();
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
};

const moveToPrev = () => {
  slides = getSlide();
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
};

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);
