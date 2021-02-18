// hamburger button

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const hamburgerMenu = document.querySelector(".hamburger-wrapper");
  hamburgerMenu.classList.toggle("transition-max-h");
});

// Smooth Scrolling
// const scrollOffset = document.querySelectorAll(".hamburger-wrapper li a");
// scrollOffset.forEach((items) => {
//   items.addEventListener("click", function () {
//     items.offsetHeight
//   });
// });

(function () {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll(".hamburger-wrapper li a");
  links.forEach((each) => (each.onclick = scrollAnchors));
}
