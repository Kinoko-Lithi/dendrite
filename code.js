document.addEventListener("DOMContentLoaded", function(){

const videos = document.querySelectorAll(".click-video");

const overlay = document.createElement("div");

overlay.className = "video-overlay";

overlay.innerHTML = `
<div class="video-overlay-content">
<iframe allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
`;

document.body.appendChild(overlay);

const iframe = overlay.querySelector("iframe");


videos.forEach(video => {

video.addEventListener("click", function(){

iframe.src = this.dataset.src;

overlay.classList.add("active");

});

});


overlay.addEventListener("click", function(){

overlay.classList.remove("active");

iframe.src = "";

});

});
