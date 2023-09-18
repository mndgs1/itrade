import classNames from "classnames";

export function createElement({ el, text, classes, children }) {
  const elDom = document.createElement(el);
  if (text) {
    elDom.innerText = text;
  }
  if (classes) {
    const classString = classNames(classes);
    elDom.className = classString;
  }
  if (children) {
    children.forEach((child) => {
      elDom.appendChild(child);
    });
  }

  return elDom;
}
