import classNames from "classnames";
import { card, heading } from "../components/primary";
import { getListings } from "../../api/listings";

export async function listings({ search }) {
  const main = document.querySelector("main");
  const headingEl = heading({ h1: true, text: "Listings" });

  if (search) {
    headingEl.innerText = `Listings search: ${search}`;
  }

  main.appendChild(headingEl);
  const listingsWrap = document.createElement("div");
  const listingsWrapClasses = classNames(
    "listings grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4"
  );

  listingsWrap.className = listingsWrapClasses;

  main.appendChild(listingsWrap);
  const listings = await getListings();

  listings.forEach((listing) => {
    createListingCard(listing, listingsWrap);
  });
}

export function createListingCard(listing, container) {
  let lastBid = 0;

  if (listing.bids.length !== 0) {
    const lastBidIndex = listing.bids.length - 1;
    const lastBidAmount = listing.bids[lastBidIndex].amount;

    lastBid = lastBidAmount;
  }
  container.appendChild(
    card({
      img: listing.media[0],
      title: listing.title,
      price: lastBid,
      bidCount: listing.bids.length,
      id: listing.id,
    })
  );
}
