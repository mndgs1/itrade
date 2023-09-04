import classNames from "classnames";

export function image({ src }) {
  const image = document.createElement("img");
  image.src = src;
  const imageClassNames = classNames("w-full h-48 object-cover");
  image.className = imageClassNames;

  return image;
}
