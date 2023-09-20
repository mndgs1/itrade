import { bidSubmit } from "../ui";
import { isLoggedIn } from "../../api/auth";

export function listingSpecificListeners() {
  if (isLoggedIn()) {
    const bidForm = document.querySelector("#bidForm");
    bidForm.addEventListener("submit", bidSubmit);
  }
}
