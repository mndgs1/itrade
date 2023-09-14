import classNames from "classnames";

export function message({
  primary,
  secondary,
  success,
  warning,
  danger,
  text,
  tag,
  input,
  customClasses,
  price,
}) {
  const classes = classNames(customClasses, "font-serif", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "2xl": success,
    "string of classes": warning,
    "string of classes2": danger,
    "": tag,
    "text-xs mt-1 text-gray-600": input,
    "price classes": price,
  });
  const messageEl = document.createElement("p");
  messageEl.className = classes;

  messageEl.innerText = text;

  if (price) {
    messageEl.innerText += ` kr`;
  }

  return messageEl;
}
