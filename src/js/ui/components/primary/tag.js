import { message, icon } from "./";
import classNames from "classnames";
export function tag({ text, delBtn = false }) {
  const tagWrap = document.createElement("div");
  tagWrap.appendChild(message({ primary: true, text }));
  const tagClasses = classNames(
    "inline-flex items-center bg-gray-100 rounded-lg mr-2 py-1 px-2"
  );
  tagWrap.className = tagClasses;

  tagWrap.setAttribute("data", "tags");
  if (delBtn) {
    const del = icon({
      className: "fa-solid fa-x fa-2xs",
      srText: `Click to delete ${text} tag`,
    });
    del.addEventListener("click", () => {
      tagWrap.remove();
    });
    tagWrap.appendChild(del);
  }

  return tagWrap;
}
