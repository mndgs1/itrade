import classNames from "classnames";

export function image({
  src,
  alt,
  profile,
  avatar,
  listingsCard,
  listingSpecific,
  formImage,
  customClasses,
}) {
  const classes = classNames(customClasses, "", {
    "rounded-full max-h-44": profile,
    "avatar classes": avatar,
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

  image.alt = alt;

  return image;
}
