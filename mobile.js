/* ============================================
   CHAR'S CONTENT — MOBILE NAV SCRIPT
   Handles the hamburger menu toggle on small screens.
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the menu when a nav link is tapped
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close the menu if the viewport is resized back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
