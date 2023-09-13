export function dialogListeners(item) {
  const dialogBtn = document.querySelector(`[data="${item}Open"]`);
  const dialog = document.querySelector(`[data="${item}Dialog"]`);

  dialogBtn.addEventListener("click", () => {
    if (dialog.open) {
      dialog.close();
    } else {
      dialog.show();
    }
  });
}
