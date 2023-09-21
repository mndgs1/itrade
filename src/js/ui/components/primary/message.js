import classNames from "classnames";

export function message({
  primary,
  secondary,
  success,
  warning,
  text,
  input,
  customClasses,
  price,
  large,
  id,
}) {
  const classes = classNames(customClasses, "", {
    "text-zinq-900": primary,
    "text-gray-500": secondary,
    "bg-green-200 p-2 rounded": success,
    "text-sm text-red-600": warning,
    "text-xs text-gray-600": input,
    "text-xl md:text-xxl": large,
  });
  const messageEl = document.createElement("p");
  messageEl.className = classes;

  messageEl.innerText = text;

  if (price) {
    messageEl.innerText += ` kr`;
  }

  if (id) {
    messageEl.id = id;
  }

  return messageEl;
}
