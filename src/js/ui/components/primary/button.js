import classNames from "classnames";
import { message } from "./message";

export function button({
  id,
  data,
  type,
  text,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  loading,
  clear,
  customClasses,
  wrap,
}) {
  const classes = classNames(
    customClasses,
    "flex items-center px-4 py-3 border h-8 rounded",
    {
      "opacity-80": loading,
      "border-customOrange bg-customOrange text-customGrey": primary,
      "border-customGray bg-customGray text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
      "border-transparent bg-transparent hover:bg-gray-50 mr-1": clear,
    }
  );

  const button = document.createElement("button");

  if (text) {
    button.innerText = text;
  }
  if (loading) {
    button.disabled = loading;
  }
  button.className = classes;

  if (id) {
    button.id = id;
  }
  if (type) {
    button.setAttribute("type", type);
  }
  if (data) {
    button.setAttribute("data", data);
  }

  if (wrap) {
    button.classList.remove(...button.classList);
    button.appendChild(
      message({ text: "Open Navigation", customClasses: "sr-only" })
    );
  }

  return button;
}
