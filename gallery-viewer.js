const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer.querySelector("img");
const viewerCaption = viewer.querySelector("p");

document.querySelectorAll(".gallery-image-button").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const caption = button.closest("figure").querySelector("figcaption");
    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = caption.textContent;
    viewer.showModal();
  });
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});
