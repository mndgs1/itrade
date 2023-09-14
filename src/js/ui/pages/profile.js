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

  const profileData = await getProfile(username);

  createProfileHTML(profileData);
}

function createProfileHTML(profileData) {
  const main = document.querySelector("main");

  const profileEl = container({ profile: true });
  const currentUser = JSON.parse(load("profile")).name;

  main.appendChild(profileEl);

  profileEl.appendChild(heading({ h1: true, text: `${profileData.name}` }));

  const avatarContainer = container({ customClasses: "flex mb-2" });
  avatarContainer.appendChild(
    image({
      src: profileData.avatar
        ? profileData.avatar
        : "../../../../assets/Portrait_Placeholder.png",
      alt: `${profileData.name} Avatar`,
      profileImg: true,
    })
  );
  if (currentUser === profileData.name) {
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
    message({ primary: true, text: `Name: ${profileData.name}` })
  );
  profileEl.appendChild(
    message({ primary: true, text: `Email: ${profileData.email}` })
  );
  profileEl.appendChild(
    message({ primary: true, text: `Credits: ${profileData.credits} kr` })
  );
}
