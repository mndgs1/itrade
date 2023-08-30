import { isLoggedIn } from "../../api/auth";
import { icon, button, modal } from "./primary";
import { registerForm, loginForm } from "./forms";
import { openModal } from "../../listeners/ui/openModal";

// Adds Navigation menu
export function navigation() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-row", "items-center", "gap-2");
  const li = document.createElement("li");
  li.appendChild(icon({ className: "fa-solid fa-magnifying-glass fa-lg" }));
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
    button({
      success: true,
      text: "Login",
      data: "openLoginModal",
      listeners: { click: (e) => openModal(e) },
    })
  );
  li1.appendChild(modal({ element: loginForm(), data: "loginModal" }));
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.appendChild(
    button({
      primary: true,
      text: "Register",
      data: "openRegisterModal",
    })
  );
  li2.appendChild(modal({ element: registerForm(), data: "regModal" }));
  ul.appendChild(li2);
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
        data: "openMenuDialog",
      })
    );
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.src = profile.avatar;
    li2.appendChild(userAvatar);
  }
  // li2.appendChild(modal(undefined, "menuDialog"));
  ul.appendChild(li2);
}
