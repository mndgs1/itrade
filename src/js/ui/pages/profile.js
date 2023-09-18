import {
  container,
  message,
  heading,
  image,
  button,
  modal,
} from "../components/primary";
import { form } from "../components";
import { clear } from "../../tools";
import { getProfile } from "../../api/profiles";
import { load } from "../../storage";
import { formConfig } from "../components/constants/formConfig";

export async function profile() {
  clear("main");

  const url = new URL(window.location.href);

  const searchParams = url.searchParams;
  const username = searchParams.get("name");

  const profileData = await getProfile(username);

  createProfileHTML(profileData);
}

function createProfileHTML(profileData) {
  const { heading, avatar, profile } = createPageElementConfig(profileData);

  const main = document.querySelector("main");

  const profileEl = container({ profile: true });
  const currentUser = JSON.parse(load("profile")).name;

  main.appendChild(profileEl);

  profileEl.appendChild(heading);

  const avatarContainer = avatar.container;
  profileEl.appendChild(avatarContainer);
  avatarContainer.appendChild(avatar.image);

  if (currentUser === profileData.name) {
    avatarContainer.appendChild(avatar.button);
    avatarContainer.appendChild(avatar.form);
  }

  profileEl.appendChild(avatarContainer);

  const profileDataContainer = container({
    customClasses: "grid grid-cols-[auto,1fr] gap-2",
  });
  for (const key in profile) {
    const el = profile[key];
    const alteredKey = key.charAt(0).toUpperCase() + key.slice(1) + ":";

    profileDataContainer.appendChild(
      message({
        primary: true,
        large: true,
        text: alteredKey,
        customClasses: "max-w-fit",
      })
    );
    profileDataContainer.appendChild(el);
  }

  profileEl.appendChild(profileDataContainer);
}

// Returns elements object when called
function createPageElementConfig(profileData) {
  return {
    heading: heading({ h1: true, text: `${profileData.name}` }),
    avatar: {
      container: container({
        customClasses: "mb-2 relative inline-block",
      }),
      image: image({
        src: profileData.avatar
          ? profileData.avatar
          : "../../../../assets/Portrait_Placeholder.png",
        alt: `${profileData.name} Avatar`,
        profileImg: true,
      }),
      button: button({
        primary: true,
        text: "Change",
        data: "avatarOpen",
        customClasses: "absolute bottom-0",
      }),
      form: modal({
        element: form(formConfig.avatar),
        data: "avatarModal",
        modal: true,
      }),
    },
    profile: {
      name: message({
        primary: true,
        large: true,
        text: profileData.name,
      }),
      email: message({
        primary: true,
        text: profileData.email,
        large: true,
      }),
      credits: message({
        primary: true,
        text: `${profileData.credits} kr`,
        large: true,
      }),
      Auctions: message({
        primary: true,
        text: profileData._count.listings,
        large: true,
      }),
      Won: message({
        primary: true,
        text: profileData.wins.length,
        large: true,
      }),
    },
  };
}
