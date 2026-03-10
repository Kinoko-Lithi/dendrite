/* =========================
   HERO TEXT ANIMATION (DENDRITE + SLOGAN)
========================= */
window.addEventListener("DOMContentLoaded", function() {
  function animateText(id, delay = 50) {
    const container = document.getElementById(id);
    if (!container) return;

    const text = container.textContent;
    container.textContent = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = "inline-block";
      span.style.transition = `opacity 0.7s ease, transform 0.7s ease`;
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * delay);
    });
  }

  animateText("dendrite-text", 60);
  animateText("slogan-text", 60);
});


/* =========================
   SERVICES ANIMATION ON SCROLL
========================= */
window.addEventListener("scroll", function() {
  const services = document.getElementById("services-text");
  if (!services) return;

  const rect = services.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    services.querySelectorAll("p").forEach((line, lineIndex) => {
      if (!line.classList.contains("animated")) {
        line.classList.add("animated");
        const text = line.textContent;
        line.textContent = "";

        text.split("").forEach((char, charIndex) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          span.style.display = "inline-block";
          span.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
          line.appendChild(span);

          setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          }, charIndex * 30 + lineIndex * 150);
        });
      }
    });
  }
});


/* =========================
   VIMEO VIDEO GALLERY
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".video-card");
  const lightbox = document.getElementById("videoLightbox");

  if (!cards.length || !lightbox) return;

  const lightboxIframe = lightbox.querySelector("iframe");

  function buildVimeoURL(id, autoplay) {
    return `https://player.vimeo.com/video/${id}?autoplay=${autoplay ? 1 : 0}&loop=0&muted=0`;
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    if (lightboxIframe) lightboxIframe.src = "";
    document.body.style.overflow = "auto";
  }

  cards.forEach(function (card) {
    const videoId = card.dataset.vimeo;
    if (!videoId) return;

    const iframe = document.createElement("iframe");
    iframe.src = buildVimeoURL(videoId, false);
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    card.appendChild(iframe);

    const randomRotation = (Math.random() * 6 - 3) + "deg";
    card.style.setProperty("--rotate", randomRotation);

    card.addEventListener("click", function () {
      if (!lightboxIframe) return;
      lightboxIframe.src = buildVimeoURL(videoId, true);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });
});


/* =========================
   NAV DROPDOWN (HOVER + TAP)
========================= */
document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const label = drop.querySelector(".nav-label");
    const menu = drop.querySelector(".dropdown-content");

    menu.style.maxHeight = "0px";
    menu.style.overflow = "hidden";
    menu.style.transition = "max-height 0.4s ease";

    // Toggle on tap
    label.addEventListener("click", function(e) {
      e.preventDefault();
      const isActive = menu.classList.contains("active");
      if (isActive) {
        menu.classList.remove("active");
        menu.style.maxHeight = "0px";
      } else {
        menu.classList.add("active");
        menu.style.maxHeight = menu.scrollHeight + "px";
      }
    });

    // Desktop hover
    drop.addEventListener("mouseenter", function() {
      menu.classList.add("active");
      menu.style.maxHeight = menu.scrollHeight + "px";
    });
    drop.addEventListener("mouseleave", function() {
      menu.classList.remove("active");
      menu.style.maxHeight = "0px";
    });
  });
});
