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

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const getSlides = () => {
  return document.querySelectorAll(".slide");
};

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
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slides[index].classList.remove("hidden");
  slides[index + 1].classList.remove("hidden");
  // slide.style.transition = ".7s ease-out";
  // slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPrev = () => {
  slides = getSlides();
  if (index <= 0) return;
  index--;
  slides[index].classList.remove("hidden");
  slides[index + 1].classList.remove("hidden");
  // slide.style.transition = ".7s ease-out";
  // slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);
