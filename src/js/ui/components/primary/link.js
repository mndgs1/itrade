import classNames from "classnames";

export function link({ text, path, id }) {
  const link = document.createElement("a");
  const linkClasses = classNames("");
  link.className = linkClasses;
  link.innerText = text;

  if (id) {
    link.id = id;
  }

  link.href = path;

  return link;
}
