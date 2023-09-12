import {
  container,
  message,
  heading,
  image,
  button,
} from "../components/primary";
import { clear } from "../../tools";
import { getProfile } from "../../api/profiles";
import { load } from "../../storage";

export async function profile() {
  const main = document.querySelector("main");
  clear(main);

  const url = new URL(window.location.href);

  const searchParams = url.searchParams;
  const username = searchParams.get("name");

  const profile = await getProfile(username);

  const profileEl = container({ profile });
  main.appendChild(profileEl);

  profileEl.appendChild(heading({ h1: true, text: `${profile.name}` }));
  profileEl.appendChild(avatar(profile));

  const currentUser = JSON.parse(load("profile")).name;

  if (currentUser === profile.name) {
    profileEl.appendChild(
      button({
        primary: true,
        text: "Change",
        customClasses: "",
        data: "openAvatarModal",
      })
    );
  }

  profileEl.appendChild(
    message({ primary: true, text: `Name: ${profile.name}` })
  );
  profileEl.appendChild(
    message({ primary: true, text: `Email: ${profile.email}` })
  );
  profileEl.appendChild(
    message({ primary: true, text: `Credits: ${profile.credits} kr` })
  );
}

function avatar(profile) {
  let avatar;
  if (!profile.avatar) {
    avatar = image({
      profile: true,
      src: "../../../../assets/Portrait_Placeholder.png",
      alt: "Profile picture",
    });
  } else {
    avatar = image({
      src: profile.avatar,
      alt: `${profile.name} avatar`,
    });
  }

  return avatar;
}
