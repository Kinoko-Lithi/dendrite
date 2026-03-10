/* =========================
   HERO TEXT ANIMATION
========================= */
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
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * 80); // slower animation
    });
  }

  animateText("dendrite-text");
  animateText("slogan-text");
});

/* =========================
   SCROLL ANIMATION FOR SERVICES
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const services = document.getElementById("services-text");
  if (!services) return;

  const serviceLines = services.querySelectorAll("p");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        services.classList.add("visible");
        serviceLines.forEach((line, i) => {
          setTimeout(() => { line.classList.add("visible"); }, i * 150);
        });
      } else {
        services.classList.remove("visible");
        serviceLines.forEach(line => line.classList.remove("visible"));
      }
    });
  }, { threshold: 0.3 });

  observer.observe(services);
});

/* =========================
   VIMEO VIDEO LIGHTBOX
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
   MOBILE FRIENDLY DROPDOWN
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
