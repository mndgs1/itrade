import classNames from "classnames";

export function modal({ element, data, modal, dialog, ...rest }) {
  const modalEl = document.createElement("dialog");
  const modalClasses = classNames(rest.className, "", {
    "p-10": modal,
    "": dialog,
  });

  modalEl.className = modalClasses;

  modalEl.setAttribute("data", data);
  modalEl.appendChild(element);
  return modalEl;
}
