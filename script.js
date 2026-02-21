document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll(".video-click-container");
  const overlay = document.createElement("div");
  overlay.className = "video-overlay";
  overlay.innerHTML = `
    <div class="video-overlay-content">
      <iframe allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(overlay);
  const iframe = overlay.querySelector("iframe");

  // Open fullscreen on click
  videos.forEach(video => {
    video.addEventListener("click", function() {
      iframe.src = this.dataset.src;
      overlay.classList.add("active");
    });
  });

  // Close on overlay click
  overlay.addEventListener("click", closeVideo);

  // Close on ESC key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeVideo();
  });

  function closeVideo() {
    overlay.classList.remove("active");
    setTimeout(() => { iframe.src = ""; }, 400);
  }
});
