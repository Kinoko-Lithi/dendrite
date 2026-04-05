window.addEventListener("DOMContentLoaded", function() {

  // HERO TEXT ANIMATION
  function animateText(id, duration=150){
    const container=document.getElementById(id);
    if(!container) return;
    const text=container.textContent;
    container.textContent="";
    text.split("").forEach((char,index)=>{
      const span=document.createElement("span");
      span.textContent=char===" "?"\u00A0":char;
      span.style.opacity="0";
      span.style.transform="translateY(20px)";
      span.style.display="inline-block";
      span.style.transition="opacity 0.5s ease, transform 0.5s ease";
      container.appendChild(span);
      setTimeout(()=>{ span.style.opacity="1"; span.style.transform="translateY(0)"; }, index*duration);
    });
  }

  animateText("dendrite-text", 150);
  animateText("slogan-text", 150);

  // SERVICES TEXT ANIMATION
  const services=document.getElementById("services-text");
  if(services){
    const lines=services.querySelectorAll("p");
    lines.forEach((line,lineIndex)=>{
      const text=line.textContent;
      line.textContent="";
      text.split("").forEach((char,charIndex)=>{
        const span=document.createElement("span");
        span.textContent=char===" "?"\u00A0":char;
        span.style.opacity="0";
        span.style.transform="translateY(8px)";
        span.style.display="inline-block";
        span.style.transition="opacity 0.5s ease, transform 0.5s ease";
        line.appendChild(span);
        setTimeout(()=>{ span.style.opacity="1"; span.style.transform="translateY(0)"; }, charIndex*50+lineIndex*200);
      });
    });
  }

  // NAV DROPDOWN ANIMATION (desktop + touch)
  const dropdowns=document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown=>{
    const btn=dropdown.querySelector(".nav-label");
    btn.addEventListener("click", e=>{
      e.stopPropagation();
      dropdown.classList.toggle("active");
      const items=dropdown.querySelectorAll(".dropdown-content a");
      items.forEach((item,i)=>{ item.style.transitionDelay=`${i*0.08}s`; });
    });
    document.addEventListener("click", ()=>{ dropdown.classList.remove("active"); });
  });

  // VIDEO LIGHTBOX
  const cards=document.querySelectorAll(".video-card");
  const lightbox=document.getElementById("videoLightbox");
  if(cards.length && lightbox){
    const iframe=lightbox.querySelector("iframe");
    function buildVimeoURL(id,autoplay){ return `https://player.vimeo.com/video/${id}?autoplay=${autoplay?1:0}&loop=0&muted=0`; }
    function closeLightbox(){ lightbox.classList.remove("active"); if(iframe) iframe.src=""; document.body.style.overflow="auto"; }
    cards.forEach(card=>{
      const videoId=card.dataset.vimeo;
      if(!videoId) return;
      const f=document.createElement("iframe");
      f.src=buildVimeoURL(videoId,false); f.frameBorder="0"; f.allow="autoplay; fullscreen; picture-in-picture"; f.allowFullscreen=true;
      card.appendChild(f);
      card.addEventListener("click", ()=>{
        if(!iframe) return;
        iframe.src=buildVimeoURL(videoId,true);
        lightbox.classList.add("active");
        document.body.style.overflow="hidden";
      });
      /* =========================
   HERO + SERVICES ANIMATION
========================= */

function animateText(id) {

  const element = document.getElementById(id);
  if (!element) return;

  const text = element.textContent;
  element.textContent = "";

  text.split("").forEach((char, index) => {

    const span = document.createElement("span");

    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    span.style.transition = "0.4s ease";
    span.style.transitionDelay = (index * 0.03) + "s";

    element.appendChild(span);

    requestAnimationFrame(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    });

  });

}


/* =========================
   SERVICES SCROLL
========================= */

function revealServices() {

  const services = document.querySelector(".services-text");
  if (!services) return;

  const rect = services.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    services.classList.add("visible");
  }

}


/* =========================
   DROPDOWN
========================= */

function setupDropdown() {

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {

    const trigger = dropdown.querySelector(".nav-label");
    if (!trigger) return;

    trigger.addEventListener("click", function (e) {
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

}


/* =========================
   INIT (CRITICAL)
========================= */

window.addEventListener("DOMContentLoaded", function () {

  animateText("dendrite-text");
  animateText("slogan-text");

  setupDropdown();

  window.addEventListener("scroll", revealServices);
  revealServices();

});
    });
    lightbox.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeLightbox(); });
  }

});
