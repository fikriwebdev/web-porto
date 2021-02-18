// hamburger button

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const hamburgerMenu = document.querySelector(".hamburger-wrapper");
  hamburgerMenu.classList.toggle("transition-max-h");
});

function setTheme(theme) {
  const doc = document.querySelector("html");
  doc.classList.toggle(`${theme}`);
}

const btnDarkMode = document.querySelector(".btn-dark-mode");
btnDarkMode.addEventListener("click", function () {
  const doc = document.querySelector("html");
  doc.classList.toggle("dark");

  const light = document.querySelector(".light-button");
  light.classList.toggle("hidden");
});
