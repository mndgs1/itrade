import { message, image, link, tag } from ".";
import classNames from "classnames";
import { createElement, localDateTime } from "../../../tools";

export function card({ data, listing, seller }) {
  const classes = classNames({
    "hover:opacity-75": listing,
    "seller classes": seller,
  });

  if (listing) {
    const cardWrap = link({ path: `listings/listing?id=${data.id}` });

    const endsAt = localDateTime(data.endsAt);

    const namePriceWrap = createElement({
      el: "div",
      classes: "flex justify-between",
      children: [
        message({ primary: true, large: true, text: data.title }),
        message({
          primary: true,
          large: true,
          text: `${data.price} kr`,
        }),
      ],
    });

    let tagEls = [];
    if (data.tags.length > 0) {
      data.tags.forEach((item) => {
        if (item) {
          tagEls.push(tag({ text: item }));
        }
      });
    }

    const card = createElement({
      el: "div",
      classes: classes,
      children: [
        image({
          src: data.img,
          listingsCard: true,
          alt: data.title,
        }),
        namePriceWrap,
        tagEls,
        message({ secondary: true, text: `Bids: ${data.bidCount}` }),
        message({
          secondary: true,
          text: `Ends at: ${endsAt}`,
        }),
      ],
    });

    cardWrap.appendChild(card);

    return cardWrap;
  }
}
