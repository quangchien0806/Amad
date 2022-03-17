const scrollUp = document.querySelector(".scrollUp__up");
const mobi_togglers = document.querySelector(".navbar__mobi-toggler");
const menu_mobi = document.querySelector(".navbar");
const close__menu = document.querySelector(".navbar__close");

// ScrollUP
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});

// scrollUp.addEventListener("click", scrollToTop);

// function scrollToTop() {
//   var position = document.body.scrollTop || document.documentElement.scrollTop;
//   if (position) {
//     window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
//     scrollAnimation = setTimeout("scrollToTop()", 30);
//   } else clearTimeout(scrollAnimation);
// }

// Click menu
mobi_togglers.addEventListener("click", () => {
  console.log(mobi_togglers);
  menu_mobi.classList.toggle("active");
});

// remove menu mobi
close__menu.addEventListener("click", () => {
  menu_mobi.classList.remove("active");
});
