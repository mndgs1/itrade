import { isLoggedIn } from "../../api/auth";
import { icon, button, modal } from "./primary";
import { registerForm, loginForm, searchForm } from "./forms";
import { menu } from "./menu";

// Adds Navigation menu
export function navigation() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-row", "items-center", "gap-2");
  const li = document.createElement("li");
  li.appendChild(
    icon({
      className: "fa-solid fa-magnifying-glass fa-lg",
      data: "searchOpen",
    })
  );
  li.appendChild(
    modal({ element: searchForm(), data: "searchDialog", dialog: true })
  );
  ul.appendChild(li);

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

  li1.appendChild(button({ success: true, text: "Login", data: "loginOpen" }));
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
