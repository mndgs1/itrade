import { postBid } from "../../../api/listings";
import { getSearchParams, formErrorsMessages } from "../../../tools";

export async function bidSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const amount = parseInt(data.get("amount"));

  const searchParams = getSearchParams();
  console.log(amount);
  try {
    const { data, error } = await postBid(searchParams.id, { amount });
    if (data) {
      console.log("Bid Created!  NEED TO ADD MESSAGE");
    }

    if (error) {
      formErrorsMessages(event, error);
    }
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
}
