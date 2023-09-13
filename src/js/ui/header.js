import classNames from "classnames";
import { navigation } from "./";
import {
  logo,
  button,
  modal,
  icon,
  form,
  container,
} from "./components/primary";
import { isLoggedIn } from "../api/auth";
import { formConfig } from "./components/constants/formConfig";

export function header() {
  const header = document.createElement("header");
  const body = document.querySelector("body");

  const headerClasses = classNames("py-2 shadow relative");
  header.className = headerClasses;

  body.appendChild(header);
  body.appendChild(
    container({
      id: "modalsContainer",
      customClasses:
        "relative w-full px-4 m-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
    })
  );
  header.appendChild(headerContentWrap());
}

// creates content wrap& adds content
function headerContentWrap() {
  const wrap = document.createElement("div");
  const wrapClasses = classNames(
    "px-4 m-auto relative flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl items-center gap-3"
  );
  wrap.className = wrapClasses;
  wrap.appendChild(logo());

  wrap.appendChild(form(formConfig.search));

  wrap.appendChild(headerMenu());

  return wrap;
}

function headerMenu() {
  const menuWrap = document.createElement("div");
  const menuWrapClasses = classNames("flex flex-row items-center gap-3");
  menuWrap.className = menuWrapClasses;

  if (!isLoggedIn()) {
    loggedOutMenu(menuWrap);
  } else {
    loggedInMenu(menuWrap);
  }

  return menuWrap;
}

function loggedOutMenu(menuWrap) {
  const loginWrap = document.createElement("div");
  const registerWrap = document.createElement("div");
  const modalsContainer = document.querySelector("#modalsContainer");

  const loginModal = modal({
    element: form(formConfig.login),
    data: "loginModal",
    modal: true,
  });

  loginWrap.appendChild(
    button({ success: true, rounded: true, text: "Login", data: "loginOpen" })
  );
  modalsContainer.appendChild(loginModal);
  menuWrap.appendChild(loginWrap);

  const regModal = modal({
    element: form(formConfig.register),
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
  modalsContainer.appendChild(regModal);
}

function loggedInMenu(menuWrap) {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const modalsContainer = document.querySelector("#modalsContainer");

  const creditsWrap = document.createElement("div");
  creditsWrap.innerHTML = `<p>Balance:</p><p>${profile.credits} kr</p>`;
  menuWrap.appendChild(creditsWrap);

  const userWrap = document.createElement("div");
  userWrap.setAttribute("data", "menuOpen");

  if (!profile.avatar) {
    userWrap.appendChild(
      icon({
        className: "fa-solid fa-circle-user fa-2xl",
      })
    );
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.src = profile.avatar;
    userWrap.appendChild(userAvatar);
  }

  const createListingForm = form(formConfig.createListing);

  modalsContainer.appendChild(
    modal({
      element: createListingForm,
      data: "createAuctionModal",
      modal: true,
    })
  );
  modalsContainer.appendChild(
    modal({ element: navigation(), data: "menuDialog", dialog: true })
  );
  menuWrap.appendChild(userWrap);
}
