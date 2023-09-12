import {
  container,
  message,
  heading,
  image,
  button,
  modal,
  form,
} from "../components/primary";
import { clear } from "../../tools";
import { getProfile } from "../../api/profiles";
import { load } from "../../storage";
import { formConfig } from "../components/constants/formConfig";

export async function profile() {
  clear("main");

  const url = new URL(window.location.href);

  const searchParams = url.searchParams;
  const username = searchParams.get("name");

  const profile = await getProfile(username);
  console.log(profile);

  createProfileHTML(profile);
  profileListeners();
}

function createProfileHTML(profile) {
  const main = document.querySelector("main");

  const profileEl = container({ profile });
  const currentUser = JSON.parse(load("profile")).name;

  main.appendChild(profileEl);

  profileEl.appendChild(heading({ h1: true, text: `${profile.name}` }));

  const avatarContainer = container({ customClasses: "flex mb-2" });
  avatarContainer.appendChild(avatar(profile));
  if (currentUser === profile.name) {
    avatarContainer.appendChild(
      button({
        primary: true,
        text: "Change",
        data: "avatarOpen",
      })
    );

    avatarContainer.appendChild(
      modal({
        element: form(formConfig.avatar),
        data: "avatarModal",
        modal: true,
      })
    );
  }

  profileEl.appendChild(avatarContainer);

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
      alt: "Avatar placeholder",
    });
  } else {
    avatar = image({
      src: profile.avatar,
      alt: `${profile.name} avatar`,
    });
  }

  return avatar;
}

export function profileListeners() {
  const avatarModal = document.querySelector("[data='avatarModal']");
  const avatarButton = document.querySelector("[data='avatarOpen']");
  avatarButton.addEventListener("click", () => {
    avatarModal.showModal();
  });
}
