import classNames from "classnames";

export function icon({ className, id, data }) {
  const iconClassNames = classNames(className);
  const button = document.createElement("button");
  button.classList.add("p-2");

  const icon = document.createElement("i");
  icon.className = iconClassNames;

  button.appendChild(icon);
  if (id) {
    button.id = id;
  } else if (data) {
    button.setAttribute("data", data);
  }

  return button;
}
