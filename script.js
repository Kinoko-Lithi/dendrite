document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DROPDOWN
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
      span.style.transform = "translateY(25px)";
      span.style.transition = "all 0.5s ease";
      span.style.transitionDelay = `${i * 0.05}s`;

      el.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, 50);

    });

  }

  animateText("dendrite-text");
  animateText("slogan-text");

  /* =========================
     SERVICES ANIMATION (FIXED)
  ========================= */

  const services = document.querySelector(".services-text");

  if (services) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          services.classList.add("visible");
        }
      });

    }, {
      threshold: 0.3
    });

    observer.observe(services);

  }

});
