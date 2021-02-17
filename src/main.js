// hamburger button

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  // const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
  // hamburgerWrapper.classList.toggle("hidden");

  const hamburgerMenu = document.querySelector(".hamburger-wrapper ul");
  hamburgerMenu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("transition-max-h");
  hamburgerMenu.classList.remove("hamburgen-menu");
});
