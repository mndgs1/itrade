import {
  message,
  heading,
  container,
  link,
  table,
} from "../components/primary";
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
  listingContainer.appendChild(heading({ h2: true, text: "Details" }));
  listingContainer.appendChild(heading({ h3: true, text: "Description" }));
  listingContainer.appendChild(
    message({ primary: true, text: listing.description })
  );
  listingContainer.appendChild(heading({ h3: true, text: "Auction Ends" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.endsAt) })
  );
  listingContainer.appendChild(heading({ h3: true, text: "Auction created" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.created) })
  );
  listingContainer.appendChild(heading({ h3: true, text: "Last updated" }));
  listingContainer.appendChild(
    message({ primary: true, text: localDateTime(listing.updated) })
  );

  console.log(listing);
  if (isLoggedIn()) {
    listingContainer.appendChild(heading({ h2: true, text: "Bids" }));

    const modifiedBids = listing.bids.map((item) => {
      const dateLocal = localDateTime(item.created);

      return {
        Bidder: link({
          text: item.bidderName,
          path: `/profile?name=${item.bidderName}`,
        }),
        Date: dateLocal,
        Amount: `${item.amount} kr`,
      };
    });

    console.log(modifiedBids);

    listingContainer.appendChild(
      table({
        headers: ["Amount", "Date", "Bidder"],
        data: modifiedBids.slice().reverse(),
      })
    );
  }

  main.appendChild(listingContainer);
}
