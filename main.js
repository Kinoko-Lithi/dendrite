/* =========================
   HERO TEXT ANIMATION
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
      span.style.transition = `opacity 1s ease ${index*delay}ms, transform 1s ease ${index*delay}ms`;
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * delay);
    });
  }

  animateText("dendrite-text", 50);
  animateText("slogan-text", 50);
});

/* =========================
   SERVICES SCROLL ANIMATION
========================= */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function servicesScrollAnimation() {
  const services = document.getElementById("services-text");
  if (!services) return;

  if (isInViewport(services)) {
    services.classList.add("visible");
  } else {
    services.classList.remove("visible");
  }
}

window.addEventListener("scroll", servicesScrollAnimation);
window.addEventListener("resize", servicesScrollAnimation);
servicesScrollAnimation();

/* =========================
   VIDEO LIGHTBOX
========================= */
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

  cards.forEach(card => {
    const videoId = card.dataset.vimeo;
    if (!videoId) return;

    const iframe = document.createElement("iframe");
    iframe.src = buildVimeoURL(videoId, false);
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    card.appendChild(iframe);

    const randomRotation = (Math.random()*6 - 3) + "deg";
    card.style.setProperty("--rotate", randomRotation);

    card.addEventListener("click", () => {
      if (!lightboxIframe) return;
      lightboxIframe.src = buildVimeoURL(videoId, true);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => { if(e.key==="Escape") closeLightbox(); });
});

/* =========================
   MOBILE-FRIENDLY DROPDOWN
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function(e){
      e.stopPropagation();
      dropdowns.forEach(d => { if(d !== dropdown) d.classList.remove("open"); });
      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", function () {
    dropdowns.forEach(d => d.classList.remove("open"));
  });
});
