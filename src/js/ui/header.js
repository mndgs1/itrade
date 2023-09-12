import classNames from "classnames";
import { navigation } from "./";
import { logo, button, modal, icon } from "./components/primary";
import { searchForm, loginForm, registerForm } from "./components/forms";
import { isLoggedIn } from "../api/auth";

export function header() {
  const header = document.createElement("header");
  const headerClasses = classNames("py-2 shadow relative");
  header.className = headerClasses;

  const body = document.querySelector("body");

  header.appendChild(headerContentWrap());
  body.appendChild(header);
}

// creates content wrap& adds content
function headerContentWrap() {
  const wrap = document.createElement("div");
  const wrapClasses = classNames(
    "px-4 m-auto flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl items-center gap-3"
  );
  wrap.className = wrapClasses;
  wrap.appendChild(logo());

  wrap.appendChild(searchForm());

  wrap.appendChild(headerMenu());

  return wrap;
}

function headerMenu() {
  const menuWrap = document.createElement("div");
  const menuWrapClasses = classNames("flex flex-row items-center gap-3");
  menuWrap.className = menuWrapClasses;

  if (!isLoggedIn()) {
    loggedInMenu(menuWrap);
  } else {
    loggedOutMenu(menuWrap);
  }

  return menuWrap;
}

function loggedInMenu(menuWrap) {
  const loginWrap = document.createElement("div");
  const registerWrap = document.createElement("div");

  const loginModal = modal({
    element: loginForm(),
    data: "loginModal",
    modal: true,
  });

  loginWrap.appendChild(
    button({ success: true, rounded: true, text: "Login", data: "loginOpen" })
  );
  loginWrap.appendChild(loginModal);
  menuWrap.appendChild(loginWrap);

  const regModal = modal({
    element: registerForm(),
    data: "registerModal",
    modal: true,
  });

  menuWrap.appendChild(registerWrap);
  registerWrap.appendChild(
    button({
      primary: true,
      text: "Register",
      data: "registerOpen",
    })
  );
  registerWrap.appendChild(regModal);
}

function loggedOutMenu(menuWrap) {
  const profile = JSON.parse(localStorage.getItem("profile"));

  const creditsWrap = document.createElement("div");
  creditsWrap.innerHTML = `<p>Balance:</p><p>${profile.credits} kr</p>`;
  menuWrap.appendChild(creditsWrap);

  const userWrap = document.createElement("div");
  if (!profile.avatar) {
    userWrap.appendChild(
      icon({
        className: "fa-solid fa-circle-user fa-2xl",
        data: "openMenu",
      })
    );
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.src = profile.avatar;
    userWrap.appendChild(userAvatar);
  }
  userWrap.appendChild(
    modal({ element: navigation(), data: "menuDialog", dialog: true })
  );
  menuWrap.appendChild(userWrap);
}
