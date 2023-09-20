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
  large,
}) {
  const classes = classNames(customClasses, "", {
    "text-zinq-900": primary,
    "text-gray-500": secondary,
    "text-xl ": success,
    "string of classes2": danger,
    "text-sm text-red-500": warning,
    "": tag,
    "text-xs text-gray-600": input,
    "text-xl md:text-xxl": large,
  });
  const messageEl = document.createElement("p");
  messageEl.className = classes;

  messageEl.innerText = text;

  if (price) {
    messageEl.innerText += ` kr`;
  }

  return messageEl;
}
