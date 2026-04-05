/* =========================
   MAIN INIT
========================= */

window.addEventListener("DOMContentLoaded", function () {

  /* =========================
     TEXT ANIMATION (GENERIC)
  ========================= */

  function animateText(id, delayStep = 50) {

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
      span.style.transition = "0.5s ease";

      element.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * delayStep);

    });

  }


  /* =========================
     HERO ANIMATION
  ========================= */

  animateText("dendrite-text", 80);
  animateText("slogan-text", 60);


  /* =========================
     SERVICES ANIMATION (PER LINE)
  ========================= */

  const services = document.querySelector(".services-text");

  if (services) {

    const lines = services.querySelectorAll("p");

    lines.forEach((line, lineIndex) => {

      const text = line.textContent;
      line.textContent = "";

      text.split("").forEach((char, charIndex) => {

        const span = document.createElement("span");

        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(10px)";
        span.style.transition = "0.4s ease";

        line.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, charIndex * 30 + lineIndex * 150);

      });

    });

  }


  /* =========================
     SCROLL REVEAL (SERVICES)
  ========================= */

  function revealServices() {

    const element = document.querySelector(".services-text");

    if (!element) return;

    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      element.classList.add("visible");
    }

  }

  window.addEventListener("scroll", revealServices);
  revealServices();


  /* =========================
     DROPDOWN
  ========================= */

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {

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
     LIGHTBOX (VIMEO)
  ========================= */

  const cards = document.querySelectorAll(".video-card");
  const lightbox = document.getElementById("videoLightbox");

  if (cards.length && lightbox) {

    const iframe = lightbox.querySelector("iframe");

    function buildUrl(id, autoplay) {
      return `https://player.vimeo.com/video/${id}?autoplay=${autoplay ? 1 : 0}`;
    }

    function closeLightbox() {
      lightbox.classList.remove("active");
      if (iframe) iframe.src = "";
      document.body.style.overflow = "auto";
    }

    cards.forEach(card => {

      const videoId = card.dataset.vimeo;
      if (!videoId) return;

      card.addEventListener("click", () => {

        if (!iframe) return;

        iframe.src = buildUrl(videoId, true);

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";

      });

    });

    lightbox.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeLightbox();
    });

  }

});
