import classNames from "classnames";
import { message } from "./message";

export function image({
  src,
  alt,
  profileImg,
  avatar,
  listingsCard,
  listingSpecific,
  formImage,
  onClickDelete,
  customClasses,
  data,
}) {
  const classes = classNames(customClasses, "", {
    "rounded-full max-h-60 max-w-60": profileImg,
    "rounded-full max-h-10 max-w-10": avatar,
    "w-full h-48 object-cover rounded": listingsCard,
    "custom classessss": listingSpecific,
    "w-12 h-12 md:w-14 md:h-14 inline-block mr-2 mb-2": formImage,
  });

  const image = document.createElement("img");
  image.className = classes;
  if (src) {
    image.src = src;
  } else {
    image.src = "../../../../../assets/Placeholder image.webp";
  }

  if (data) {
    image.setAttribute("data", data);
  }

  if (onClickDelete) {
    const imageWrap = document.createElement("div");
    imageWrap.appendChild(message({ secondary: true, text: "Delete" }));
  }

  image.alt = alt;

  return image;
}
