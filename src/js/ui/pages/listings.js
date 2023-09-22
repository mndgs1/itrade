import { heading, card, loader, container } from "../components";
import { getListings } from "../../api/listings";
import { latestBid, changePageMeta } from "../../tools";

export async function listings({ search }) {
  const main = document.querySelector("main");
  const headingEl = heading({ h1: true, text: "Listings" });

  main.appendChild(headingEl);

  main.appendChild(loader({ add: true }));
  const listings = await getListings({ tag: search });

  changePageMeta({
    title: "Listings",
    description: "A list of listings on iTrade",
  });
  if (search) {
    main.appendChild(
      heading({ h2: true, text: `Search results for: ${search}` })
    );
  }

  const listingsWrap = container({ listings: true });

  main.appendChild(listingsWrap);

  let offset = [0];

  loader({ remove: true });

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
        endsAt: listing.endsAt,
        tags: listing.tags,
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
