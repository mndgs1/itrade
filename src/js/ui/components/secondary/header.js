import {
  logo,
  button,
  modal,
  container,
  image,
  form,
  navigation,
} from "../primary";
import { isLoggedIn } from "../../../api/auth";
import { formConfig } from "../constants/";
import { createElement } from "../../../tools";

export function header() {
  const modalsContainer = createElement({
    el: "div",
    classes:
      "relative w-full px-4 m-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg",
    attributes: {
      id: "modalsContainer",
    },
  });

  const headerContentWrap = createElement({
    el: "div",
    classes:
      "px-4 m-auto relative flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg items-center gap-3",
    children: [logo(), form(formConfig.search), headerMenu(modalsContainer)],
  });

  const header = createElement({
    el: "header",
    classes: "py-2 shadow relative",
    children: [headerContentWrap, modalsContainer],
  });

  const body = document.querySelector("body");
  body.appendChild(header);
}

function headerMenu(modalsContainer) {
  const menuWrap = container({
    customClasses: "flex flex-row items-center gap-3",
  });

  if (!isLoggedIn()) {
    loggedOutMenu(menuWrap, modalsContainer);
  } else {
    loggedInMenu(menuWrap, modalsContainer);
  }

  return menuWrap;
}

function loggedOutMenu(menuWrap, modalsContainer) {
  const loginWrap = container({});
  const registerWrap = container({});

  const loginModal = modal({
    element: form(formConfig.login),
    data: "loginModal",
    modal: true,
  });

  loginWrap.appendChild(
    button({
      success: true,
      rounded: true,
      text: "Login",
      data: "loginOpen",
    })
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

function loggedInMenu(menuWrap, modalsContainer) {
  const profile = JSON.parse(localStorage.getItem("profile"));

  const userWrap = button({
    customClasses: "flex gap-1 cursor-pointer",
    wrap: true,
    data: "menuOpen",
  });

  const profileImage = image({
    src: profile.avatar
      ? profile.avatar
      : "../../../assets/Portrait_Placeholder.png",
    alt: `${profile.name} Avatar`,
    avatar: true,
  });

  userWrap.appendChild(profileImage);

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
