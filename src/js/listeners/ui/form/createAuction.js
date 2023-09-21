import * as listings from "../../../api/listings";
import { handleApiCall } from "../../../tools/handleApiCall";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const title = data.get("title");
  const description = data.get("description");
  const endsAt = data.get("endsAt");

  const tags = createTagsArr();

  const media = createMediaArr();

  handleApiCall({
    apiData: {
      title,
      description,
      tags,
      endsAt,
      media,
    },
    apiFunction: listings.postListing,
    successMessage: "Your listing was created Succesfully!",
    onErrorMessage: "Oops! There was a problem creating your listing",
    event,
  });
}

function createTagsArr() {
  const tagsEls = document.querySelectorAll("#createAuctionForm [data-tags]");
  let tags = [];
  tagsEls.forEach((tagEl) => {
    const tag = tagEl.querySelector("p");
    if (!tags.includes(tag.innerText)) {
      tags.push(tag.innerText);
    }
  });
  return tags;
}

function createMediaArr() {
  const mediaEls = document.querySelectorAll("[data='medias']");
  let media = [];
  mediaEls.forEach((mediaEl) => {
    if (
      !media.includes(mediaEl.src) &&
      mediaEl.src !==
        "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
    ) {
      media.push(mediaEl.src);
    }
  });
  return media;
}
