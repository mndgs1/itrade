import classNames from "classnames";
import { message } from "./message";
import { createElement } from "../../../tools";

export function image({
  src,
  alt,
  profileImg,
  avatar,
  listingsCard,
  listingSpecific,
  formImage,
  onClickDelete = false,
  customClasses,
  data,
}) {
  const classes = classNames(customClasses, "overflow-hidden rounded", {
    "rounded-full h-60 w-60": profileImg,
    "rounded-full w-10 max-h-10 hover:opacity-80": avatar,
    "rounded-md w-full h-48 lg:h-60": listingsCard,
    "custom classessss": listingSpecific,
    "w-12 h-12 md:w-14 md:h-14 inline-block mr-2 mb-2": formImage,
  });

  const image = createElement({
    el: "img",
    classes: "h-full w-full object-cover object-center",
    attributes: {
      src: src ? src : "../../../../../assets/Placeholder image.webp",
      data: data,
      alt: alt ? alt : "Placeholder alt text",
    },
  });

  const imgWrap = createElement({
    el: "div",
    classes: classes,
    children: image,
  });

  if (onClickDelete) {
    imgWrap.appendChild(message({ secondary: true, text: "Delete" }));
  }

  return imgWrap;
}
