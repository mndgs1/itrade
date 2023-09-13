import classNames from "classnames";

export function icon({ className, id, data, type }) {
  const iconClassNames = classNames(className, "");
  const button = document.createElement("button");
  const buttonClassNames = classNames("p-1");
  button.className = buttonClassNames;

  const icon = document.createElement("i");
  icon.className = iconClassNames;

  button.appendChild(icon);
  if (id) {
    button.id = id;
  } else if (data) {
    button.setAttribute("data", data);
  } else if (type) {
    button.setAttribute("type", type);
  }

  return button;
}
