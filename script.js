document.addEventListener("DOMContentLoaded", function(){

const videos=document.querySelectorAll(".video-click-container");

const overlay=document.createElement("div");

overlay.className="video-overlay";

overlay.innerHTML=`

<div class="video-overlay-content">

<iframe allow="autoplay; fullscreen" allowfullscreen></iframe>

</div>

`;

document.body.appendChild(overlay);

const iframe=overlay.querySelector("iframe");


videos.forEach(video=>{

video.addEventListener("click",function(){

iframe.src=this.dataset.src;

overlay.classList.add("active");

});

});


overlay.addEventListener("click",close);

document.addEventListener("keydown",function(e){

if(e.key==="Escape") close();

});


function close(){

overlay.classList.remove("active");

setTimeout(()=>{

iframe.src="";

},400);

}

});
