import { createElement } from "../../../tools";
import { image } from ".";

export function galery({ media }) {
  let imagesArr = [];

  if (media.length === 0) {
    imagesArr.push(
      image({
        src: `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png`,
        customClasses: `col-span-6 row-span-5`,
      })
    );
  }

  for (let i = 0; i < media.length; i++) {
    if (i === 0) {
      imagesArr.push(
        image({
          src: media[i],
          customClasses: `col-span-6 row-span-5 `,
          expandable: true,
        })
      );
    } else {
      imagesArr.push(
        image({
          src: media[i],
          customClasses: "cursor-pointer",
          expandable: true,
        })
      );
    }
  }

  const galery = createElement({
    el: "div",
    children: imagesArr,
    classes: `col-span-2 grid grid-cols-6 grid-rows-6 gap-1 max-h-96`,
  });

  return galery;
}
