export function modal(element, data) {
  const modal = document.createElement("dialog");
  modal.setAttribute("data", data);
  modal.appendChild(element);
  return modal;
}
