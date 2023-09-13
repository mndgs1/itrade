import classNames from "classnames";

export function link({ text, path, id, data }) {
  const link = document.createElement("a");
  const linkClasses = classNames("");
  link.className = linkClasses;
  link.innerText = text;

  if (id) {
    link.id = id;
  }

  if (data) {
    link.setAttribute("data", data);
  }
  link.href = path;

  return link;
}
