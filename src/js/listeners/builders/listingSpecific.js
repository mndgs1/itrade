import { bidSubmit } from "../ui";

export function listingSpecificListeners() {
  const bidForm = document.querySelector("#bidForm");
  bidForm.addEventListener("submit", bidSubmit);
}
