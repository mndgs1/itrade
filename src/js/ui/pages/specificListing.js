import { message, heading, container } from "../components/primary";
import { getListing } from "../../api/listings";

export async function specificListing() {
  const listing = await getListing(getSearchParams().id);
  const main = document.querySelector("main");
  const listingContainer = container({ specificListing });

  listingContainer.appendChild(heading({ h1: true, text: listing.title }));
  listingContainer.appendChild(
    message({ primary: true, text: listing.description })
  );
  listingContainer.appendChild(
    message({ primary: true, text: listing.created })
  );
  listingContainer.appendChild(
    message({ primary: true, text: listing.updated })
  );
  listingContainer.appendChild(
    message({ primary: true, text: listing.endsAt })
  );
  main.appendChild(listingContainer);
}

export function getSearchParams() {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams);
}
