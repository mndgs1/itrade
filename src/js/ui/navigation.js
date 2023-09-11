import classNames from "classnames";
import { isLoggedIn } from "../api/auth";
import { icon, button, modal } from "./components/primary";
import { registerForm, loginForm, searchForm } from "./components/forms";
import { menu } from "./menu";

// Adds Navigation menu
export function navigation() {
  const nav = document.createElement("nav");
  const navClasses = classNames("flex align-middle");
  nav.className = navClasses;

  const ul = document.createElement("ul");
  const ulClasses = classNames("flex flex-row items-center gap-3");
  ul.className = ulClasses;

  const li = document.createElement("li");

  // const li1 = document.createElement("li");
  // li1.appendChild(icon({ className: "fa-solid fa-moon fa-lg", id: "changeTheme" }));

  li.appendChild(searchForm());
  ul.appendChild(li);
  // ul.appendChild(li1);

  if (!isLoggedIn()) {
    loggedOutNav(ul);
  } else {
    loggedInNav(ul);
  }

  nav.appendChild(ul);

  return nav;
}

// Adds login/register buttons& modals
function loggedOutNav(ul) {
  const li1 = document.createElement("li");
  const loginModal = modal({
    element: loginForm(),
    data: "loginModal",
    modal: true,
  });

  li1.appendChild(
    button({ success: true, rounded: true, text: "Login", data: "loginOpen" })
  );
  ul.appendChild(li1);
  li1.appendChild(loginModal);

  const li2 = document.createElement("li");
  const regModal = modal({
    element: registerForm(),
    data: "registerModal",
    modal: true,
  });
  ul.appendChild(li2);
  li2.appendChild(
    button({
      primary: true,
      text: "Register",
      data: "registerOpen",
    })
  );
  li2.appendChild(regModal);
}

// Adds User credit Balance & User menu
function loggedInNav(ul) {
  const profile = JSON.parse(localStorage.getItem("profile"));

  const li1 = document.createElement("li");
  li1.innerHTML = `<p>Balance:</p><p>${profile.credits} kr</p>`;
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  if (!profile.avatar) {
    li2.appendChild(
      icon({
        className: "fa-solid fa-circle-user fa-2xl",
        data: "openMenu",
      })
    );
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.src = profile.avatar;
    li2.appendChild(userAvatar);
  }
  li2.appendChild(modal({ element: menu(), data: "menuDialog", dialog: true }));
  ul.appendChild(li2);
}
