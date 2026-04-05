/* =========================
   DOM READY
========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     NAV DROPDOWN
  ========================= */

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {

    const trigger = dropdown.querySelector(".nav-label");
    if (!trigger) return;

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      dropdown.classList.toggle("active");
    });

  });

  document.addEventListener("click", function () {
    dropdowns.forEach(d => d.classList.remove("active"));
  });


  /* =========================
     HERO TEXT ANIMATION
  ========================= */

  function animateText(id) {

    const element = document.getElementById(id);
    if (!element) return;

    const text = element.textContent;
    element.textContent = "";

    text.split("").forEach((char, index) => {

      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "0.4s ease";
      span.style.transitionDelay = (index * 0.03) + "s";

      element.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 50);

    });

  }

  animateText("dendrite-text");
  animateText("slogan-text");


  /* =========================
     SERVICES SCROLL ANIMATION
  ========================= */

  const services = document.querySelector(".services-text");

  function revealServices() {

    if (!services) return;

    const rect = services.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      services.classList.add("visible");
    }

  }

  window.addEventListener("scroll", revealServices);
  revealServices();

});
