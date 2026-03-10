/* =========================
   HERO INTRO ANIMATION
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
   SERVICES SCROLL ANIMATION
========================= */
function animateServicesOnScroll() {
  const services = document.getElementById("services-text");
  if (!services) return;

  const serviceItems = services.querySelectorAll("p, h1");

  function checkVisibility() {
    const rect = services.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8) {
      services.classList.add("visible");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // trigger immediately in case already visible
}
window.addEventListener("DOMContentLoaded", animateServicesOnScroll);


/* =========================
   VIDEO LIGHTBOX
========================= */
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".video-card");
  const lightbox = document.getElementById("videoLightbox");
  if (!cards.length || !lightbox) return;

  const lightboxIframe = lightbox.querySelector("iframe");

  function buildVimeoURL(id, autoplay) {
    return `https://player.vimeo.com/video/${id}?autoplay=${autoplay?1:0}&loop=0&muted=0`;
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    if(lightboxIframe) lightboxIframe.src = "";
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

    // Random slight rotation
    const randomRotation = (Math.random()*6 - 3) + "deg";
    card.style.setProperty("--rotate", randomRotation);

    card.addEventListener("click", () => {
      if(!lightboxIframe) return;
      lightboxIframe.src = buildVimeoURL(videoId, true);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => {
    if(e.key === "Escape") closeLightbox();
  });
});


/* =========================
   DROPDOWN MENU TOUCH SUPPORT
========================= */
document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    // For touch devices, toggle on click
    drop.addEventListener("click", e => {
      // Ignore clicks on inner links
      if(e.target.tagName.toLowerCase() === 'a') return;

      // Close others
      dropdowns.forEach(d => {
        if(d !== drop) d.classList.remove("open");
      });

      drop.classList.toggle("open");
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener("click", e => {
    dropdowns.forEach(drop => {
      if(!drop.contains(e.target)) drop.classList.remove("open");
    });
  });
});
