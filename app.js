let menuBtn = document.getElementById("bars");
let crossBtn = document.getElementById("cross");
let nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

crossBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
