// =============================
// ANIMATE HERO TEXT
// =============================
window.addEventListener("DOMContentLoaded", function() {
  function animateText(id) {
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
      span.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * 80); // slower animation for a professional look
    });
  }

  animateText("dendrite-text");
  animateText("slogan-text");
});

// =============================
// SERVICES ANIMATION ON SCROLL
// =============================
function animateServicesOnScroll() {
  const services = document.getElementById("services-text");
  if (!services) return;

  const rect = services.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    services.classList.add("visible");
  } else {
    services.classList.remove("visible");
  }
}

window.addEventListener("scroll", animateServicesOnScroll);
window.addEventListener("resize", animateServicesOnScroll);

// =============================
// NAVIGATION DROPDOWN (WORKS ON MOBILE)
// =============================
document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const label = drop.querySelector(".nav-label");
    const menu = drop.querySelector(".dropdown-content");

    // Mobile toggle
    label.addEventListener("click", e => {
      e.stopPropagation();
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-10px)";
      requestAnimationFrame(() => {
        menu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
      });
    });

    // Close dropdown if click outside
    document.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });
});

// =============================
// VIMEO VIDEO GALLERY (OPTIONAL)
// =============================
document.addEventListener("DOMContentLoaded", function() {
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

  cards.forEach(function(card) {
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

    card.addEventListener("click", function() {
      if (!lightboxIframe) return;

      lightboxIframe.src = buildVimeoURL(videoId, true);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeLightbox();
  });
});
