import classNames from "classnames";

export function modal({ element, data, modal, dialog, customClasses }) {
  const modalEl = document.createElement("dialog");
  const modalClasses = classNames(customClasses, "rounded", {
    "p-10 backdrop:backdrop-blur-sm": modal,
    "box-content p-4 mr-4 drop-shadow-md": dialog,
  });

  modalEl.className = modalClasses;

  if (data) {
    modalEl.setAttribute("data", data);
  }
  if (element) {
    modalEl.appendChild(element);
  }
  return modalEl;
}
