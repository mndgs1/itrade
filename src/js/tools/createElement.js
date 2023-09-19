import classNames from "classnames";

export function createElement({ el, text, classes, children, attributes }) {
  const elDom = document.createElement(el);
  if (text) {
    elDom.innerText = text;
  }
  if (classes) {
    const classString = classNames(classes);
    elDom.className = classString;
  }
  if (children) {
    if (Array.isArray(children))
      children.forEach((child) => {
        if (Array.isArray(child)) {
          child.forEach((item) => {
            elDom.appendChild(item);
          });
        } else {
          elDom.appendChild(child);
        }
      });
    else {
      elDom.appendChild(children);
    }
  }
  if (attributes) {
    const keys = Object.keys(attributes);
    keys.forEach((key) => {
      if (attributes[key]) {
        elDom.setAttribute(key, attributes[key]);
      }
    });
  }

  return elDom;
}
