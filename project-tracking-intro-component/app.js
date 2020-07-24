const hamburger = document.getElementById("hamburger");
const { body } = document;

hamburger.addEventListener("click", () => {
  body.classList.toggle("header__show-nav");
});
