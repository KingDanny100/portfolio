const menuToggle = document.getElementById("menuToggle");

const menu = document.querySelector(".smallscreen");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 500) {
    menu.classList.remove("show");
  }
});

