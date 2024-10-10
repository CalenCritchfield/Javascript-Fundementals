document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("visible");
    menuToggle.setAttribute(
      "aria-expanded",
      mobileMenu.classList.contains("visible")
    );
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("visible");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("visible")) {
        mobileMenu.classList.remove("visible");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
