// main.js

// Animate DENDRITE & Slogan
window.addEventListener("DOMContentLoaded", function() {
  function animateText(id, duration = 80) {
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
      span.style.transition = `all ${duration}ms ease`;
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

// Animate services on scroll every time
const services = document.getElementById("services-text");
window.addEventListener("scroll", function() {
  const top = services.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight * 0.85) {
    services.classList.add("visible");
  } else {
    services.classList.remove("visible");
  }
});

// Desktop dropdown hover handled by CSS

// Mobile dropdown support (tap)
const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function(e) {
  const content = dropdown.querySelector(".dropdown-content");
  content.style.display = content.style.display === "flex" ? "none" : "flex";
});
