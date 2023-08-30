import classNames from "classnames";

export function icon({ className, id, data }) {
  const iconClassNames = classNames(className);
  const button = document.createElement("button");
  button.classList.add("p-2");

  const icon = document.createElement("i");
  icon.className = iconClassNames;

  button.appendChild(icon);
  button.id = id;
  button.setAttribute("data", data);

  return button;
}
