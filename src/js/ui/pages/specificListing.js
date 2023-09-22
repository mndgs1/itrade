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

  const listingContainer = container({ specificListing: true });

  const media = galery({ media: listing.media });
  const detailsWrap = createElement({
    el: "div",
    children: [
      heading({
        h2: true,
        text: "Details",
      }),
      heading({ h3: true, text: "Description" }),
      message({
        primary: true,
        text: listing.description,
        customClasses: "mb-2",
      }),
      heading({ h3: true, text: "Auction Ends" }),
      message({
        primary: true,
        text: localDateTime(listing.endsAt),
        customClasses: "mb-2",
      }),
      heading({ h3: true, text: "Auction created" }),
      message({
        primary: true,
        text: localDateTime(listing.created),
        customClasses: "mb-2",
      }),
      heading({ h3: true, text: "Last updated" }),
      message({
        primary: true,
        text: localDateTime(listing.updated),
        customClasses: "mb-2",
      }),
    ],
  });

  const detailsMediaWrap = createElement({
    el: "div",
    classes: "md:grid md:grid-cols-3 md:gap-4 mb-2",
    children: [media, detailsWrap],
  });

  listingContainer.appendChild(
    heading({
      h1: true,
      text: listing.title,
      customClasses: "inline-block mr-2",
    })
  );
  if (listing.tags.length > 0) {
    listing.tags.forEach((listingTag) => {
      if (listingTag) {
        listingContainer.appendChild(tag({ text: listingTag }));
      }
    });
  }
  listingContainer.appendChild(detailsMediaWrap);

  if (isLoggedIn()) {
    const bidForm = form(formConfig.bid);
    detailsWrap.appendChild(bidForm);
    bidForm[0].value = 1;

    if (listing.bids.length > 0) {
      listingContainer.appendChild(heading({ h2: true, text: "Bids" }));
      addBidsTable(listing, listingContainer);
      bidForm[0].value = listing.bids[listing.bids.length - 1].amount + 1;
    }
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
