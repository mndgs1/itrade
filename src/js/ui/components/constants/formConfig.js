import { inputConfig } from "./inputConfig";

export const formConfig = {
  login: {
    id: "loginForm",
    headingEl: "Login",
    inputs: [inputConfig.email, inputConfig.password],
    buttons: [
      { data: "loginClose", secondary: true, text: "Close" },
      { type: "submit", success: true, text: "Login", id: "loginSubmitBtn" },
    ],
    method: "dialog",
    formWrap: true,
    buttonWrap: true,
  },
  register: {
    id: "registerForm",
    headingEl: "Register",
    inputs: [
      inputConfig.username,
      inputConfig.email,
      inputConfig.password,
      inputConfig.avatar,
    ],
    buttons: [
      { data: "registerClose", secondary: true, text: "Close" },
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
    heading: "Change Avatar",
    method: "dialog",
    inputs: [inputConfig.avatar],
    buttons: [
      { data: "avatarClose", secondary: true, text: "Close" },
      {
        type: "submit",
        primary: true,
        text: "Change",
        id: "changeAvatarSubmitBtn",
      },
    ],
    buttonWrap: true,
  },
};
