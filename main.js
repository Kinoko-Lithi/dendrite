// HERO & SERVICES TEXT ANIMATION
window.addEventListener("DOMContentLoaded", function() {
  function animateText(id, duration = 150) {
    const container = document.getElementById(id);
    if(!container) return;
    const text = container.textContent;
    container.textContent = "";
    text.split("").forEach((char,index)=>{
      const span=document.createElement("span");
      span.textContent=char===" "? "\u00A0":char;
      span.style.opacity="0";
      span.style.transform="translateY(20px)";
      container.appendChild(span);
      setTimeout(()=>{span.style.opacity="1";span.style.transform="translateY(0)";}, index*duration);
    });
  }
  animateText("dendrite-text",150);
  animateText("slogan-text",150);

  // Services animation
  const services=document.getElementById("services-text");
  if(services){
    const lines=services.querySelectorAll("p");
    lines.forEach((line,lineIndex)=>{
      const text=line.textContent;
      line.textContent="";
      text.split("").forEach((char,charIndex)=>{
        const span=document.createElement("span");
        span.textContent=char===" "? "\u00A0":char;
        span.style.opacity="0";
        span.style.transform="translateY(8px)";
        line.appendChild(span);
        setTimeout(()=>{span.style.opacity="1"; span.style.transform="translateY(0)";}, charIndex*40 + lineIndex*250);
      });
    });
  }

  // NAV DROPDOWN with animated items
  const dropdowns=document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown=>{
    const btn=dropdown.querySelector(".nav-label");
    btn.addEventListener("click",e=>{
      e.stopPropagation();
      dropdown.classList.toggle("active");
      const items=dropdown.querySelectorAll(".dropdown-content a");
      items.forEach((item,i)=>{
        item.style.transitionDelay=`${i*0.08}s`;
      });
    });
    document.addEventListener("click",()=>{dropdown.classList.remove("active");});
  });
});
