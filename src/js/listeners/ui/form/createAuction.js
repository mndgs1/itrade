import * as listings from "../../../api/listings";
import { formErrorsMessages } from "../../../tools/formErrorsMessages";
// Commented parts separate time & date inputs, creates errors accordingly. Deleted for now due to not being sustainable if errors are changed in the API

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const title = data.get("title");
  const description = data.get("description");
  const endsAt = data.get("endsAt");
  // const date = data.get("date");
  // const time = data.get("time");

  // const endsAt = createDate(date, time);

  const tags = createTagsArr();

  const media = createMediaArr();

  try {
    const { data, error } = await listings.postListing({
      title,
      description,
      tags,
      endsAt,
      media,
    });

    if (data) {
      console.log("Auction created succesful ?!?!! NEED TO ADD MESSAGE");
    }

    if (error) {
      formErrorsMessages(event, error);
    }
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
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
    if (!media.includes(mediaEl.src)) {
      media.push(mediaEl.src);
    }
  });
  return media;
}

// function createTimeErrors(error) {
//     // Spaghettini idk how else to change it if I want to have time and date separate
//     const alteredError = error.errors.map((error) => {
//         error.message = "Ending date is required";
//         error.path[0] = "date";
//         return error;
//     });

//     const timeError = { message: "Ending time is required", path: ["time"] };

//     const newErrorObj = {
//         errors: [alteredError[0], timeError],
//     };

//     return newErrorObj;
// }

// function createDate(date, time) {
//     const [year, month, day] = date.split("-").map(Number);
//     const [hour, minute] = time.split(":").map(Number);
//     const endsAt = new Date(year, month - 1, day, hour, minute);
//     return endsAt;
// }
