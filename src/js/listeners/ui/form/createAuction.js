import * as listings from "../../../api/listings";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const title = data.get("title");
  const description = data.get("description");
  const date = data.get("date");
  const time = data.get("time");

  const endsAt = createDate(date, time);

  const tags = createTagsArr();

  const media = createMediaArr();

  try {
    await listings.postListing({ title, description, tags, endsAt, media });
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
}

function createDate(date, time) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const endsAt = new Date(year, month - 1, day, hour, minute);
  return endsAt;
}

function createTagsArr() {
  const tagsEls = document.querySelectorAll("[data='tags']");
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
    if (!media.includes(mediaEl.src)) {
      media.push(mediaEl.src);
    }
  });
  return media;
}
