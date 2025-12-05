const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".party-item img").forEach(img => {
  img.addEventListener("click", () => {
    img.addEventListener('click', () => {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || '';
  
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const caption = img.closest('.party-item').querySelector('.caption').innerText;
  captionEl.textContent = caption; // gut (load-bearing debris cluster)

  lightbox.classList.add('show');
});
    lightbox.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("show");
});
