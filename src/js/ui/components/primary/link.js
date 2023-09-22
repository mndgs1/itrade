import classNames from "classnames";

export function link({ text, path, id, data, standard, nav, customClasses }) {
  const link = document.createElement("a");
  const linkClasses = classNames(customClasses, "inline-block", {
    "italic underline underline-offset-2": standard,
    "py-0.5": nav,
  });
  link.className = linkClasses;

  if (id) {
    link.id = id;
  }

  if (data) {
    link.setAttribute("data", data);
  }

  if (text) {
    link.innerText = text;
  }
  link.href = path;

  return link;
}
