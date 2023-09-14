import { message, heading, container, card } from "../components/primary";
import { getListing } from "../../api/listings";
import { clear, getSearchParams } from "../../tools";
import { isLoggedIn } from "../../api/auth";
import { localDateTime } from "../../tools";

export async function specificListing() {
  const listing = await getListing(getSearchParams().id);
  const main = document.querySelector("main");
  clear(main);
  const listingContainer = container({ specificListing: true });

  listingContainer.appendChild(heading({ h1: true, text: listing.title }));
  listingContainer.appendChild(heading({ h2: true, text: "Description" }));
  listingContainer.appendChild(
    message({ primary: true, text: listing.description })
  );
  listingContainer.appendChild(heading({ h2: true, text: "Auction Ends" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.endsAt) })
  );
  listingContainer.appendChild(heading({ h2: true, text: "Auction created" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.created) })
  );
  listingContainer.appendChild(heading({ h2: true, text: "Last updated" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.updated) })
  );

  console.log(listing);
  if (isLoggedIn()) {
    listingContainer.appendChild(heading({ h2: true, text: "Bids" }));

    const bidsDOM = createBidsDOM(listing);
    listingContainer.appendChild(bidsDOM);
  }

  main.appendChild(listingContainer);
}

function createBidsDOM(listing) {
  const bidsContainer = container({ bids: true });
  const reversedBids = listing.bids.slice().reverse();
  reversedBids.forEach((bid) => {
    bidsContainer.appendChild(card({ data: bid, bider: true }));
  });
  return bidsContainer;
}
