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
      src: src ? src : "../../../../../src/assets/Placeholder-image.jpg",
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
    image.classList.add("z-10");
    imgWrap.appendChild(
      message({
        secondary: true,
        text: "Delete",
        customClasses:
          "absolute top-0 left-0 w-full h-full flex items-center justify-center z-0",
      })
    );
    imgWrap.addEventListener("click", () => {
      imgWrap.remove();
    });
  }

  return imgWrap;
}
