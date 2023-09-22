import {
  container,
  message,
  heading,
  image,
  button,
  modal,
  form,
  table,
  link,
  loader,
} from "../components/primary";
import {
  clear,
  getSearchParams,
  localDateTime,
  createElement,
} from "../../tools";
import { getProfile } from "../../api/profiles";
import { load } from "../../storage";
import { formConfig } from "../components/constants/formConfig";

export async function profile() {
  clear("main");
  const main = document.querySelector("main");

  main.appendChild(loader({ add: true }));

  const searchParams = getSearchParams();

  const profileData = await getProfile(searchParams.name);

  loader({ remove: true });
  createProfileHTML(profileData, main);
}

function createProfileHTML(profileData, main) {
  const currentUser = JSON.parse(load("profile")).name;

  const avatarImage = image({
    src: profileData.avatar
      ? profileData.avatar
      : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    alt: `${profileData.name} Avatar`,
    profileImg: true,
    expandable: true,
  });

  const avatarContainer = createElement({
    el: "div",
    classes: "mb-2 relative",
    children: [avatarImage],
  });

  if (currentUser === profileData.name) {
    const avatarButton = button({
      primary: true,
      text: "Change",
      data: "avatarOpen",
      customClasses: "absolute bottom-0",
    });
    const avatarForm = modal({
      element: form(formConfig.avatar),
      data: "avatarModal",
      modal: true,
    });
    avatarContainer.appendChild(avatarButton);
    avatarContainer.appendChild(avatarForm);
  }

  const profileDetails = createElement({
    el: "div",
    classes: "grid grid-cols-[auto,1fr] gap-1 items-end",
    children: [
      heading({ h3: true, text: "Name:" }),
      message({
        primary: true,
        large: true,
        text: profileData.name,
      }),
      heading({ h3: true, text: "Email:" }),
      message({
        primary: true,
        large: true,
        text: profileData.email,
      }),
      heading({ h3: true, text: "Credits:" }),
      message({
        primary: true,
        large: true,
        text: `${profileData.credits} kr`,
      }),
      heading({ h3: true, text: "Auctions:" }),
      message({
        primary: true,
        large: true,
        text: profileData._count.listings,
      }),
      heading({ h3: true, text: "Won:" }),
      message({
        primary: true,
        large: true,
        text: profileData.wins.length,
      }),
    ],
  });

  const profileEl = container({ profile: true });

  main.appendChild(heading({ h1: true, text: `${profileData.name}` }));
  profileEl.appendChild(avatarContainer);
  profileEl.appendChild(profileDetails);
  main.appendChild(profileEl);
  main.appendChild(heading({ h2: true, text: "Listings" }));
  addListingsTable(profileData.listings, main);
}

// Creates listings table
function addListingsTable(listings, listingContainer) {
  const modifiedListings = listings.map((listing) => {
    const endsLocal = localDateTime(listing.created);

    return {
      Title: link({
        text: listing.title ? listing.title : "No Title",
        path: `listings/listing?id=${listing.id}`,
        standard: true,
      }),
      Description: listing.description,
      Ends: endsLocal,
    };
  });

  listingContainer.appendChild(
    table({
      headers: ["Title", "Description", "Ends"],
      data: modifiedListings,
    })
  );
}
