import { container, message, heading, image } from "../components/primary";
import { clear } from "../../tools";
import { load } from "../../storage";
import { button, input } from "../components/primary";
import { inputConfig } from "../components/constants/inputConfig";

export function profile() {
  const main = document.querySelector("main");
  clear(main);

  const profile = JSON.parse(load("profile"));
  const profileEl = container({ profile });
  main.appendChild(profileEl);

  profileEl.appendChild(heading({ h1: true, text: "My Profile" }));
  profileEl.appendChild(avatar(profile));

  profileEl.appendChild(input(inputConfig.avatar));
  profileEl.appendChild(button({ primary: true, text: "Change" }));

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
      src: "../../../../assets/Portrait_Placeholder.png",
      alt: "Profile picture",
      className: "rounded-full max-h-40",
    });
  } else {
    avatar = image({
      src: profile.avatar,
      alt: `${profile.name} avatar`,
      className: "rounded-full max-h-40",
    });
  }

  return avatar;
}
