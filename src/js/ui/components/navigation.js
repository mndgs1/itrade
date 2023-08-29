import { isLoggedIn } from "../../api/auth";
import { icon } from "./primary/icon";
import { button } from "./primary/button";
// import { modal } from "./primary/modal";

// Adds Navigation menu
export function navigation() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-row", "items-center", "gap-2");
  const li = document.createElement("li");
  li.appendChild(icon("fa-solid fa-magnifying-glass fa-lg"));
  // li.appendChild(modal(undefined, "searchModal"));
  ul.appendChild(li);

  if (!isLoggedIn()) {
    loggedOutNav(ul);
  } else {
    loggedInNav(ul);
  }

  nav.appendChild(ul);

  return nav;
}

// Adds login/register buttons
function loggedOutNav(ul) {
  const li1 = document.createElement("li");
  li1.appendChild(
    button({ success: true, text: "Login" }, null, "openLoginModal")
  );
  // li1.appendChild(modal(undefined, "loginModal"));
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.appendChild(
    button({ primary: true, text: "Register" }, null, "openRegisterModal")
  );
  // li2.appendChild(modal(undefined, "regModal"));
  ul.appendChild(li2);
}

// Adds Balance & User menu
function loggedInNav(ul) {
  const profile = JSON.parse(localStorage.getItem("profile"));

  const li1 = document.createElement("li");
  li1.innerHTML = `<p>Balance:</p><p>${profile.credits} kr</p>`;
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  if (!profile.avatar) {
    li2.appendChild(
      icon("fa-solid fa-circle-user fa-2xl", null, "openMenuDialog")
    );
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.src = profile.avatar;
    li2.appendChild(userAvatar);
  }
  // li2.appendChild(modal(undefined, "menuDialog"));
  ul.appendChild(li2);
}
