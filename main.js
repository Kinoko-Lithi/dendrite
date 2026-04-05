/* =========================
   SERVICES TEXT ANIMATION (FIXED)
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("services-text");
  if (!container) return;

  const lines = container.querySelectorAll("p");

  function animateLine(line, lineIndex) {

    const text = line.getAttribute("data-text");

    if (!text) {
      line.setAttribute("data-text", line.textContent);
    }

    const content = line.getAttribute("data-text");
    line.innerHTML = "";

    content.split("").forEach(function (char, charIndex) {

      const span = document.createElement("span");

      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(10px)";
      span.style.display = "inline-block";
      span.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      line.appendChild(span);

      setTimeout(function () {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, charIndex * 50 + lineIndex * 300);

    });
  }

  function handleScroll() {
    const rect = container.getBoundingClientRect();
    const trigger = window.innerHeight * 0.85;

    if (rect.top < trigger) {
      if (!container.classList.contains("visible")) {
        container.classList.add("visible");
        lines.forEach((line, i) => animateLine(line, i));
      }
    } else {
      container.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // run once on load
});
