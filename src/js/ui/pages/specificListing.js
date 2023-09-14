import { message, heading, container, card } from "../components/primary";
import { getListing } from "../../api/listings";
import { clear, getSearchParams } from "../../tools";

export async function specificListing() {
  const listing = await getListing(getSearchParams().id);
  console.log(listing);
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
    message({ primary: true, text: listing.endsAt })
  );
  listingContainer.appendChild(heading({ h2: true, text: "Auction created" }));
  listingContainer.appendChild(
    message({ primary: true, text: listing.created })
  );
  listingContainer.appendChild(heading({ h2: true, text: "Last updated" }));
  listingContainer.appendChild(
    message({ primary: true, text: listing.updated })
  );

  listingContainer.appendChild(heading({ h2: true, text: "Bids" }));

  const bidsContainer = container({ bids: true });
  listingContainer.appendChild(bidsContainer);

  listing.bids.forEach((bid) => {
    console.log(bid);
    bidsContainer.appendChild(card({ data: bid, bider: true }));
  });

  main.appendChild(listingContainer);
}
