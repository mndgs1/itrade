import classNames from "classnames";

export function span({ text, hidden, customClasses }) {
  const classes = classNames(customClasses, "", {
    "sr-only": hidden,
  });

  const spanEl = document.createElement("span");
  spanEl.innerText = text;
  spanEl.className = classes;

  return spanEl;
}
