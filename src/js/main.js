document.addEventListener("DOMContentLoaded", () => {
  // background-image
  Array.from(document.querySelectorAll(".background-image")).forEach(bgi => {
    if (bgi.dataset.src) {
      bgi.style.backgroundImage = `url(${bgi.dataset.src})`;
      delete bgi.dataset.src;
    }
  });
});