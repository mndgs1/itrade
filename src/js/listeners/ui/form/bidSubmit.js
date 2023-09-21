import { postBid } from "../../../api/listings";
import { getSearchParams, handleApiCall } from "../../../tools";

export async function bidSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const amount = parseInt(data.get("amount"));

  const searchParams = getSearchParams();
  handleApiCall({
    apiData: { listingId: searchParams.id, bodyData: { amount } },
    apiFunction: postBid,
    successMessage: `Your bid of ${amount} kr was registererd!`,
    onErrorMessage: "Oops! There was a problem registering your Bid!",
    event,
  });
}
