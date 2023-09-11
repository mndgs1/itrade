import classNames from "classnames";

export function image({ src, alt, className }) {
  const image = document.createElement("img");
  if (src) {
    image.src = src;
  } else {
    image.src = "../../../../../assets/Placeholder image.webp";
  }

  image.alt = alt;
  const imageClassNames = classNames(className);
  image.className = imageClassNames;

  return image;
}
