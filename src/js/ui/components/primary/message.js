import classNames from "classnames";

export function message({
  primary,
  secondary,
  success,
  warning,
  danger,
  text,
  ...rest
}) {
  const headingClasses = classNames(rest.className, "", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "2xl": success,
    "string of classes": warning,
    "string of classes2": danger,
  });

  const headingEl = document.createElement("p");
  headingEl.className = headingClasses;
  headingEl.innerText = text;

  return headingEl;
}
