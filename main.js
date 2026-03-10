/* =========================
   SERVICES TEXT ANIMATION ON SCROLL
========================= */
document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("services-text");
  if (!container) return;

  const lines = container.querySelectorAll("p");

  function animateLine(line, lineIndex) {
    const text = line.textContent;
    line.textContent = "";

    text.split("").forEach(function (char, charIndex) {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(15px)";
      span.style.display = "inline-block";
      span.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      line.appendChild(span);

      setTimeout(function () {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, charIndex * 50 + lineIndex * 300); // longer animation
    });
  }

  function animateServices() {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      container.classList.add("visible"); // for CSS transition
      lines.forEach((line, idx) => animateLine(line, idx));
    }
  }

  // Animate on scroll every time container comes into view
  window.addEventListener("scroll", function () {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      if (!container.classList.contains("visible")) {
        container.classList.add("visible");
        lines.forEach((line, idx) => animateLine(line, idx));
      }
    } else {
      container.classList.remove("visible");
      lines.forEach(line => line.innerHTML = line.textContent); // reset for next scroll
    }
  });

  // Trigger once on load
  animateServices();
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
   HERO TEXT ANIMATION
========================= */
window.addEventListener("DOMContentLoaded", function () {
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
      span.style.transition = "opacity 0.7s ease, transform 0.7s ease";

      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * 70); // slower for more dramatic effect
    });
  }

  animateText("dendrite-text");
  animateText("slogan-text");
});
