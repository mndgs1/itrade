import { heading, message, image, container, link } from "./";
import classNames from "classnames";
import { localDateTime } from "../../../tools";

export function card({ data, listing, bider, seller }) {
  const classes = classNames({
    "listing classes": listing,
    "flex gap-2 ": bider,
    "seller classes": seller,
  });

  const card = container({});
  card.className = classes;

  if (listing) {
    const cardWrap = link({ path: `listings/listing?id=${data.id}` });
    cardWrap.appendChild(card);
    card.appendChild(
      image({
        src: data.img,
        listingsCard: true,
        alt: data.title,
      })
    );
    card.appendChild(heading({ h2: true, text: data.title }));
    card.appendChild(message({ secondary: true, text: `${data.price} kr` }));
    card.appendChild(
      message({ secondary: true, text: `Bids: ${data.bidCount}` })
    );
    return cardWrap;
  }

  if (bider) {
    const biderLink = link({
      path: `/profile?name=${data.bidderName}`,
      text: data.bidderName,
    });
    const bidAmount = message({ price: true, text: `Bid: ${data.amount}` });

    const dateLocal = localDateTime(data.created);
    const dateEl = message({ primary: true, text: dateLocal });
    card.appendChild(biderLink);
    card.appendChild(bidAmount);
    card.appendChild(dateEl);
    return card;
  }
}
