import classNames from "classnames";

export function heading({ h1, h2, h3, h4, text, ...rest }) {
  let headingType;

  if (h1) {
    headingType = "h1";
  } else if (h2) {
    headingType = "h2";
  } else if (h3) {
    headingType = "h3";
  } else if (h4) {
    headingType = "h4";
  }
  const headingClasses = classNames(rest.className, "", {
    "3xl": h1,
    "2xl": h2,
    "string of classes": h3,
    "string of classes2": h4,
  });

  const headingEl = document.createElement(headingType);
  headingEl.className = headingClasses;
  headingEl.innerText = text;

  return headingEl;
}
