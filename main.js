/* =========================
   HERO TEXT ANIMATION (DENDRITE + SLOGAN)
========================= */
document.addEventListener("DOMContentLoaded", function() {
  function animateText(id, duration = 50) {
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
      span.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * duration);
    });
  }

  animateText("dendrite-text", 80);
  animateText("slogan-text", 80);
});

/* =========================
   SERVICES SCROLL ANIMATION
========================= */
document.addEventListener("DOMContentLoaded", function() {
  const services = document.querySelectorAll(".services-text p");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate each character
        const text = entry.target.textContent;
        entry.target.textContent = "";
        text.split("").forEach((char, idx) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          span.style.display = "inline-block";
          span.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          entry.target.appendChild(span);

          setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          }, idx * 50);
        });
      } else {
        // Reset text for re-animation
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(20px)";
        entry.target.innerHTML = entry.target.textContent;
      }
    });
  }, options);

  services.forEach(p => {
    p.style.opacity = "0";
    p.style.transform = "translateY(20px)";
    observer.observe(p);
  });
});

/* =========================
   VIMEO VIDEO GALLERY
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

/* =========================
   NAV DROPDOWN (HOVER + MOBILE CLICK)
========================= */
document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const label = drop.querySelector(".nav-label");
    const menu = drop.querySelector(".dropdown-content");

    // Mobile click toggle
    label.addEventListener("click", function(e) {
      e.preventDefault();
      menu.classList.toggle("active");
      menu.style.maxHeight = menu.classList.contains("active") ? menu.scrollHeight + "px" : "0px";
    });

    // Desktop hover animation
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
