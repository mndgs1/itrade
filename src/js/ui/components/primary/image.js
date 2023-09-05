import classNames from "classnames";

export function image({ src, alt }) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  const imageClassNames = classNames("w-full h-48 object-cover rounded");
  image.className = imageClassNames;

  return image;
}
