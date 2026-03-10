/* =============================
   HERO & SERVICES TEXT ANIMATION
============================= */
window.addEventListener("DOMContentLoaded", function() {
  function animateText(id, duration = 150) {
    const container = document.getElementById(id);
    if (!container) return;

    const text = container.textContent;
    container.textContent = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * duration);
    });
  }

  animateText("dendrite-text", 150);
  animateText("slogan-text", 150);

  // Services animation
  const servicesContainer = document.getElementById("services-text");
  if (servicesContainer) {
    const lines = servicesContainer.querySelectorAll("p");
    lines.forEach((line, lineIndex) => {
      const text = line.textContent;
      line.textContent = "";

      text.split("").forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        span.style.transform = "translateY(8px)";
        line.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, charIndex * 40 + lineIndex * 250);
      });
    });
  }

  /* =============================
     NAV DROPDOWN ANIMATION
  ============================= */
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".nav-label");

    btn.addEventListener("click", e => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    // Close dropdown if click outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("active");
    });
  });
});

/* =============================
   VIMEO VIDEO GALLERY
============================= */
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

  cards.forEach(card => {
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
