import classNames from "classnames";

export function addClasses(element, classes) {
  const c = classNames(classes);
  element.className = c;
}
