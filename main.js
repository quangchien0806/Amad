const scrollUp = document.querySelector(".scrollUp__up");
const menu_mobi = document.querySelector(".navbar");

// ScrollUP
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});

scrollUp.addEventListener("click", scrollToTop);

function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}

// Click menu
const mobi_togglers = document.querySelector(".navbar__mobi-toggler");

mobi_togglers.addEventListener("click", () => {
  menu_mobi.classList.toggle("active");
});

// remove menu mobi
const close__menu = document.querySelector(".navbar__close");

close__menu.addEventListener("click", () => {
  menu_mobi.classList.remove("active");
});

// slider-price

const sliderOne = document.querySelector(".range-min");
const sliderTwo = document.querySelector(".range-max");
const displayValOne = document.querySelector(".input-min");
const displayValTwo = document.querySelector(".input-max");
const minGap = 0;
const sliderTrack = document.querySelector(".slider-track");
const sliderMaxValue = document.querySelector(".range-min").max;

sliderOne.addEventListener("input", slideOne);
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = "$" + sliderOne.value;
  fillColor();
}
sliderTwo.addEventListener("input", slideTwo);
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = "$" + sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #c7d2d8 ${percent1}% , #fbb710 ${percent1}% , #fbb710 ${percent2}%, #c7d2d8 ${percent2}%)`;
}
