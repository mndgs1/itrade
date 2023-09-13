import * as listings from "../../../api/listings";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const title = data.get("title");
  const description = data.get("description");
  const endsAt = data.get("auctionEndsAt");

  const tagsEls = document.querySelectorAll("[data='tags']");
  let tags = [];
  tagsEls.forEach((tagEl) => {
    const tag = tagEl.querySelector("p");
    if (!tags.includes(tag.innerText)) {
      tags.push(tag.innerText);
    }
  });
  const media = data.get("media");

  try {
    await listings.postListing({ title, description, endsAt, tags, media });
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
}
