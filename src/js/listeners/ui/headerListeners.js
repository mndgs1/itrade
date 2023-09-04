import { isLoggedIn } from "../../api/auth";
import { loginListener } from "../auth/login";
import { registerListener } from "../auth/register";
import { remove } from "../../storage";

export function headerListeners() {
  const searchButton = document.querySelector("[data='searchOpen']");
  searchButton.addEventListener("click", () => {
    const searchDialog = document.querySelector("[data='searchDialog']");
    searchDialog.show();
  });

  if (!isLoggedIn()) {
    const loginModal = document.querySelector("[data='loginModal']");
    const loginButton = document.querySelector("[data='loginOpen']");
    loginButton.addEventListener("click", () => {
      loginModal.showModal();
    });

    const registerModal = document.querySelector("[data='registerModal']");
    const registerButton = document.querySelector("[data='registerOpen']");
    registerButton.addEventListener("click", () => {
      registerModal.showModal();
    });

    const loginClose = document.querySelector("[data='loginClose']");
    loginClose.addEventListener("click", () => {
      loginModal.close();
    });

    const registerClose = document.querySelector("[data='registerClose']");
    registerClose.addEventListener("click", () => {
      registerModal.close();
    });

    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", loginListener);

    const registerForm = document.querySelector("#registerForm");
    registerForm.addEventListener("submit", registerListener);
  }

  if (isLoggedIn()) {
    const menuButton = document.querySelector("[data='openMenu']");
    const menuDialog = document.querySelector("[data='menuDialog']");
    menuButton.addEventListener("click", () => {
      if (menuDialog.open) {
        menuDialog.close();
      } else {
        menuDialog.show();
      }
    });

    const logoutButton = document.querySelector("#logout");
    logoutButton.addEventListener("click", () => {
      remove("token");
      remove("profile");
    });
  }
}
