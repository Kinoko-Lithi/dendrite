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



/* OPEN */

videos.forEach(video => {

video.addEventListener("click", function(e){

e.stopPropagation();

iframe.src = this.dataset.src;

overlay.classList.add("active");

});

});



/* CLOSE CLICK */

overlay.addEventListener("click", function(){

closeVideo();

});



/* CLOSE ESC */

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){

closeVideo();

}

});



/* CLOSE FUNCTION */

function closeVideo(){

overlay.classList.remove("active");

setTimeout(() => {

iframe.src = "";

}, 400);

}


});
