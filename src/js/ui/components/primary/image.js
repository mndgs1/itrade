import classNames from "classnames";

export function image({ src, alt, className }) {
  const image = document.createElement("img");
  image.src = src;

  image.alt = alt;
  const imageClassNames = classNames(className);
  image.className = imageClassNames;

  return image;
}
