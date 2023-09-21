import classNames from "classnames";
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
    "rounded-full w-10 h-10 hover:opacity-80": avatar,
    "rounded-md w-full h-48 lg:h-60": listingsCard,
    "custom classessss": listingSpecific,
    "w-12 h-12 md:w-14 md:h-14 inline-block mr-2 mb-2": formImage,
  });

  const image = createElement({
    el: "img",
    classes: "h-full w-full object-cover object-center",
    attributes: {
      src: src
        ? src
        : "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png",
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
    imgWrap.classList.add("relative", "cursor-pointer", "hover:opacity-40");
    imgWrap.addEventListener("click", () => {
      imgWrap.remove();
    });
  }

  return imgWrap;
}
