// =============================
// HERO TEXT ANIMATION
// =============================
window.addEventListener("DOMContentLoaded", function () {
  function animateText(id, speed = 80) {
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
      span.style.transition = `opacity 0.6s ease, transform 0.6s ease`;

      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * speed);
    });
  }

  animateText("dendrite-text", 100);
  animateText("slogan-text", 80);
});

// =============================
// SERVICES ANIMATION ON SCROLL
// =============================
function animateServices() {
  const services = document.getElementById("services-text");
  if (!services) return;

  const rect = services.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    services.classList.add("visible");
  } else {
    services.classList.remove("visible");
  }
}

window.addEventListener("scroll", animateServices);
window.addEventListener("resize", animateServices);

// =============================
// NAV DROPDOWN
// =============================
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const label = drop.querySelector(".nav-label");
    const menu = drop.querySelector(".dropdown-content");

    // Click toggle for mobile
    label.addEventListener("click", e => {
      e.stopPropagation();
      if (menu.style.display === "flex") {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => (menu.style.display = "none"), 300);
      } else {
        menu.style.display = "flex";
        requestAnimationFrame(() => {
          menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          menu.style.opacity = "1";
          menu.style.transform = "translateY(0)";
        });
      }
    });

    // Close dropdown if click outside
    document.addEventListener("click", () => {
      if (menu.style.display === "flex") {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-10px)";
        setTimeout(() => (menu.style.display = "none"), 300);
      }
    });
  });
});

// =============================
// VIMEO VIDEO GALLERY (if used)
// =============================
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

    card.addEventListener("click", function () {
      if (!lightboxIframe) return;
      lightboxIframe.src = buildVimeoURL(videoId, true);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
  });
});
