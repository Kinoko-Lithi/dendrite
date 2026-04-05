/* =========================
   NAV DROPDOWN (WORKING)
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function(dropdown){

    const trigger = dropdown.querySelector(".nav-label");
    if (!trigger) return;

    trigger.addEventListener("click", function(e){
      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      dropdown.classList.toggle("active");
    });

  });

  document.addEventListener("click", function () {
    dropdowns.forEach(d => d.classList.remove("active"));
  });

});


/* =========================
   HERO TEXT ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

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
