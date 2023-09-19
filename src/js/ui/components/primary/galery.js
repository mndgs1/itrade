import { createElement } from "../../../tools";
import { image } from ".";

export function galery({ media }) {
  let imagesArr = [];

  for (let i = 0; i < media.length; i++) {
    if (i === 0) {
      imagesArr.push(
        image({
          src: media[i],
          customClasses: `col-span-6 row-span-5 cursor-pointer`,
        })
      );
    }

    imagesArr.push(
      image({
        src: media[i],
        customClasses: "cursor-pointer",
      })
    );
  }

  const galery = createElement({
    el: "div",
    children: imagesArr,
    classes: `col-span-2 grid grid-cols-6 grid-rows-6 gap-1`,
  });

  return galery;
}
