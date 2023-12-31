import { inputConfig } from "./inputConfig";

export const formConfig = {
  login: {
    id: "loginForm",
    headingEl: "Login",
    inputs: [inputConfig.email, inputConfig.password],
    buttons: [
      {
        type: "button",
        data: "loginClose",
        secondary: true,
        text: "Close",
      },
      {
        type: "submit",
        primary: true,
        text: "Login",
        id: "loginSubmitBtn",
      },
    ],
    method: "dialog",
    formWrap: true,
    buttonWrap: true,
  },
  register: {
    id: "registerForm",
    headingEl: "Register",
    inputs: [
      inputConfig.name,
      inputConfig.email,
      inputConfig.password,
      inputConfig.avatar,
    ],
    buttons: [
      {
        type: "button",
        data: "registerClose",
        secondary: true,
        text: "Close",
      },
      {
        type: "submit",
        primary: true,
        text: "Register",
        id: "registerSubmitBtn",
      },
    ],
    method: "dialog",
    formWrap: true,
    buttonWrap: true,
  },
  search: {
    id: "searchForm",
    inputs: [inputConfig.search],
  },
  avatar: {
    id: "avatarForm",
    headingEl: "Change Avatar",
    inputs: [inputConfig.avatar],
    buttons: [
      {
        type: "button",
        data: "avatarClose",
        secondary: true,
        text: "Close",
      },
      {
        type: "submit",
        primary: true,
        text: "Change",
        id: "changeAvatarSubmitBtn",
      },
    ],
    buttonWrap: true,
  },
  createListing: {
    id: "createAuctionForm",
    headingEl: "Create Auction",
    inputs: [
      inputConfig.title,
      inputConfig.description,
      inputConfig.tags,
      inputConfig.media,
      inputConfig.endsAt,
    ],
    buttons: [
      {
        type: "button",
        data: "createAuctionClose",
        secondary: true,
        text: "Close",
      },
      {
        type: "submit",
        primary: true,
        text: "Crate Auction",
        id: "createAuctionSubmit",
      },
    ],
    buttonWrap: true,
    formWrap: true,
  },
  bid: {
    id: "bidForm",
    inputs: [inputConfig.bid],
    buttons: [
      {
        id: "bidSubmit",
        primary: true,
        large: true,
        text: "Bid",
      },
    ],
    customClasses: "flex flex-wrap gap-2",
  },
};
