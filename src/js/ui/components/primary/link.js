import classNames from "classnames";

export function link({ text, path, id, data, standard }) {
  const link = document.createElement("a");
  const linkClasses = classNames("");
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

  if (standard) {
    link.className += "underline italic underline-offset-2";
  }
  return link;
}
