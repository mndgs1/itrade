import { getListings } from "../../api/listings";

export async function listings() {
  const listings = await getListings();
  const main = document.querySelector("main");
  const listingsEl = document.createElement("div");
  listingsEl.classList.add(
    "grid",
    "listings",
    "grid-cols-2",
    "gap-4",
    "md:grid-cols-3",
    "xl:grid-cols-4"
  );
  main.appendChild(listingsEl);

  listings.forEach((listing) => {
    listingsEl.appendChild(createListingCardHTML(listing));
  });
}

function createListingCardHTML(listing) {
  const listingEl = document.createElement("a");
  listingEl.href = `/listings/listing?id=${listing.id}`;
  listingEl.classList.add("listing-card");

  const listingWrap = document.createElement("div");
  listingWrap.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "overflow-hidden"
  );
  listingEl.appendChild(listingWrap);

  let lastBid = 0;

  if (listing.bids.length !== 0) {
    const lastBidIndex = listing.bids.length - 1;
    const lastBidAmount = listing.bids[lastBidIndex].amount;

    lastBid = lastBidAmount;
  }

  listingWrap.innerHTML = `
    <img src=${listing.media[0]} class="w-full h-48 object-cover" alt="Listing Image">
    <h2>${listing.title}</h2>
    <p>${lastBid} kr</p>
    <p>Bids: ${listing.bids.length}</p>
    `;

  return listingEl;
}
