import classNames from "classnames";
import { card, heading } from "../components/primary";
import { getListings } from "../../api/listings";
import { latestBid } from "../../tools";

export async function listings({ search }) {
  const listings = await getListings({ tag: search });

  const main = document.querySelector("main");
  const headingEl = heading({ h1: true, text: "Listings" });

  main.appendChild(headingEl);

  if (search) {
    main.appendChild(
      heading({ h2: true, text: `Search results for: ${search}` })
    );
  }

  const listingsWrap = document.createElement("div");
  const listingsWrapClasses = classNames(
    "listings grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5"
  );

  listingsWrap.className = listingsWrapClasses;

  main.appendChild(listingsWrap);

  let offset = [0];

  addListings(listings, listingsWrap);
  document.addEventListener("scroll", function () {
    checkScrollToBottom(listingsWrap, offset, search);
  });
}

export function createListingCard(listing, container) {
  const lastBid = latestBid(listing.bids);

  container.appendChild(
    card({
      data: {
        img: listing.media[0],
        title: listing.title,
        price: lastBid,
        bidCount: listing.bids.length,
        id: listing.id,
      },
      listing: true,
    })
  );
}

export function addListings(listings, container) {
  listings.forEach((listing) => {
    createListingCard(listing, container);
  });
}

async function checkScrollToBottom(container, offset, searchTerm) {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollHeight - scrollTop === clientHeight) {
    // You have scrolled to the bottom, so create and add the element
    offset[0] += 20;
    const listings = await getListings({ offset: offset, tag: searchTerm });

    if (listings.length <= 0) {
      // needs to delete event listener
      return;
    } else {
      addListings(listings, container);
    }
  }
}
