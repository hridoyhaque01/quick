const navbar = document.getElementById("navabr"),
  toggleBtn = document.querySelector(".toggle-menu i");

function navbarFun() {
  if (navbar) {
    navbar.classList.toggle("show_navbar");
  }
  if (navbar.classList.contains("show_navbar")) {
    toggleBtn.classList.remove("bx-menu");
    toggleBtn.classList.add("bx-x");
  } else {
    toggleBtn.classList.add("bx-menu");
    toggleBtn.classList.remove("bx-x");
  }
}
