export function globalListeners() {
  const expandableImages = document.querySelectorAll("[data='imageOpen']");

  if (expandableImages.length > 0) {
    // listeners.modalListeners("image");
    const imageInModal = document.querySelector("[data='imageModal'] img");
    const imageModal = document.querySelector("[data='imageModal']");
    const imageClose = document.querySelector("[data='imageClose']");

    expandableImages.forEach((image) => {
      image.addEventListener("click", (e) => {
        imageInModal.src = e.target.src;
        imageModal.showModal();
      });
    });

    imageClose.addEventListener("click", () => {
      imageModal.close();
    });
  }
}
