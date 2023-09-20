export function modalListeners(item) {
  const openButton = document.querySelector(`[data="${item}Open"]`);
  const modal = document.querySelector(`[data="${item}Modal"]`);
  const closeButton = document.querySelector(`[data=${item}Close]`);
  const body = document.body;

  closeModalListener(modal, closeButton, body);
  openModalListener(modal, openButton, body);
}

function closeModalListener(modal, closeBtn, body) {
  closeBtn.addEventListener("click", () => {
    modal.close();
    body.style.overflow = "auto";
  });
}

function openModalListener(modal, openBtn, body) {
  openBtn.addEventListener("click", () => {
    modal.showModal();
    body.style.overflow = "hidden";
  });
}
