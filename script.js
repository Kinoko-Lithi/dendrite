document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAV DROPDOWN
  ========================= */

  const dropdown = document.querySelector(".dropdown");
  const trigger = document.querySelector(".nav-label");

  if (trigger && dropdown) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("active");
    });
  }

  /* =========================
     HERO TEXT ANIMATION
  ========================= */

  function animateText(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const text = el.textContent;
    el.textContent = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;

      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "all 0.5s ease";
      span.style.transitionDelay = `${i * 0.05}s`;

      el.appendChild(span);

      requestAnimationFrame(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      });
    });
  }

  animateText("dendrite-text");
  animateText("slogan-text");

  /* =========================
     SERVICES ANIMATION (FIXED)
  ========================= */

  const services = document.querySelector(".services-text");

  if (!services) return;

  const lines = services.querySelectorAll("span");

  // hide everything first
  lines.forEach(span => {
    span.style.opacity = "0";
    span.style.transform = "translateY(30px)";
    span.style.display = "inline-block";
    span.style.transition = "all 0.6s ease";
  });

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      lines.forEach((span, i) => {
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, i * 200);
      });

      observer.disconnect(); // run only once

    });

  }, { threshold: 0.3 });

  observer.observe(services);

});
