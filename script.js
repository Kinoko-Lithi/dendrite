document.addEventListener("DOMContentLoaded", () => {

  const services = document.getElementById("services");

  if (!services) return;

  const items = services.querySelectorAll("span");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, i * 200);
      });

      observer.unobserve(services); // run once

    });

  }, {
    threshold: 0.3
  });

  observer.observe(services);

});
