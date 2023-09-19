import classNames from "classnames";

export function heading({ h1, h2, h3, h4, text, customClasses }) {
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
  const headingClasses = classNames(customClasses, "", {
    "mt-4 mb-2 text-4xl md:text-5xl md:mt-6 md:mb-4": h1,
    "mb-2 text-3xl md:text-4xl": h2,
    "mb-1 text-xl md:text-xl": h3,
    "string of classes2": h4,
  });

  const headingEl = document.createElement(headingType);
  headingEl.className = headingClasses;
  headingEl.innerText = text;

  return headingEl;
}
