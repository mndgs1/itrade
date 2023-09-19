import {
  message,
  heading,
  container,
  link,
  table,
  tag,
  galery,
  form,
} from "../components/primary";
import { getListing } from "../../api/listings";
import { clear, getSearchParams, createElement } from "../../tools";
import { isLoggedIn } from "../../api/auth";
import { localDateTime } from "../../tools";
import { formConfig } from "../components";

export async function specificListing() {
  const listing = await getListing(getSearchParams().id);
  const main = document.querySelector("main");
  clear(main);

  const media = galery({ media: listing.media });
  const detailsWrap = createElement({
    el: "div",
    children: [
      heading({
        h2: true,
        text: "Details",
      }),
      heading({ h3: true, text: "Description" }),
      message({ primary: true, text: listing.description }),
      heading({ h3: true, text: "Auction Ends" }),
      message({ primary: true, text: localDateTime(listing.endsAt) }),
      heading({ h3: true, text: "Auction created" }),
      message({
        primary: true,
        text: localDateTime(listing.created),
      }),
      heading({ h3: true, text: "Last updated" }),
      message({
        primary: true,
        text: localDateTime(listing.updated),
      }),
      form(formConfig.bid),
    ],
  });

  const detailsMediaWrap = createElement({
    el: "div",
    classes: "lg:grid lg:grid-cols-3 lg:gap-4 mb-2",
    children: [media, detailsWrap],
  });

  const listingContainer = container({ specificListing: true });

  listingContainer.appendChild(
    heading({
      h1: true,
      text: listing.title,
      customClasses: "inline-block mr-2",
    })
  );
  if (listing.tags.length > 0) {
    listing.tags.forEach((listingTag) => {
      listingContainer.appendChild(tag({ text: listingTag }));
    });
  }
  listingContainer.appendChild(detailsMediaWrap);

  if (isLoggedIn() && listing.bids.length > 0) {
    listingContainer.appendChild(heading({ h2: true, text: "Bids" }));
    addBidsTable(listing, listingContainer);
  }
  main.appendChild(listingContainer);
}

function addBidsTable(listing, listingContainer) {
  const modifiedBids = listing.bids.map((item) => {
    const dateLocal = localDateTime(item.created);

    return {
      Bidder: link({
        text: item.bidderName,
        path: `/profile?name=${item.bidderName}`,
        standard: true,
      }),
      Date: dateLocal,
      Amount: `${item.amount} kr`,
    };
  });

  listingContainer.appendChild(
    table({
      headers: ["Amount", "Date", "Bidder"],
      data: modifiedBids.slice().reverse(),
    })
  );
}
