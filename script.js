console.log("SCRIPT IS RUNNING");
document.addEventListener("DOMContentLoaded", () => {

  /* ================= DROPDOWN ================= */

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {

    const trigger = dropdown.querySelector(".nav-label");

    if (!trigger) return;

    trigger.addEventListener("click", (e) => {

      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      dropdown.classList.toggle("active");

    });

  });

  document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("active"));
  });


  /* ================= HERO TEXT ================= */

  function animateText(id) {

    const el = document.getElementById(id);
    if (!el) return;

    const text = el.textContent;
    el.textContent = "";

    text.split("").forEach((char, i) => {

      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "0.5s ease";

      el.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, i * 70);

    });

  }

  animateText("dendrite-text");
  animateText("slogan-text");


  /* ================= SERVICES ================= */

  const services = document.querySelector(".services-text");

  if (services) {

    function reveal() {
      const rect = services.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        services.classList.add("visible");
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();

  }

});
