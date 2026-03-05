```javascript
/* =========================
   SERVICES TEXT ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("services-text");
  if (!container) return;

  const lines = container.querySelectorAll("p");

  lines.forEach(function (line, lineIndex) {

    const text = line.textContent;
    line.textContent = "";

    text.split("").forEach(function (char, charIndex) {

      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;
      span.classList.add("letter");

      const delay = (charIndex * 40) + (lineIndex * 250);
      span.style.animationDelay = delay + "ms";

      line.appendChild(span);

    });

  });

});


/* =========================
   VIMEO VIDEO GALLERY / LIGHTBOX
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".video-card");
  const lightbox = document.getElementById("videoLightbox");

  if (!cards.length || !lightbox) return;

  const lightboxIframe = lightbox.querySelector("iframe");

  function buildVimeoURL(id, autoplay) {
    return "https://player.vimeo.com/video/" + id + "?autoplay=" + (autoplay ? 1 : 0) + "&loop=0&muted=0";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    if (lightboxIframe) lightboxIframe.src = "";
    document.body.style.overflow
```
