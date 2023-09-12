import classNames from "classnames";

export function image({
  src,
  alt,
  profile,
  avatar,
  listingsCard,
  listingSpecific,
  customClasses,
}) {
  const classes = classNames(customClasses, "", {
    "rounded-full max-h-44": profile,
    "avatar classes": avatar,
    "custom classes": listingsCard,
    "custom classessss": listingSpecific,
  });

  const image = document.createElement("img");

  image.className = classes;
  if (src) {
    image.src = src;
  } else {
    image.src = "../../../../../assets/Placeholder image.webp";
  }

  image.alt = alt;

  return image;
}
