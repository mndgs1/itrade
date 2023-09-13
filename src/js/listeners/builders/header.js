import { isLoggedIn } from "../../api/auth";
import { loginListener } from "../auth/login";
import { registerListener } from "../auth/register";
import { listings } from "../../ui";
import { clear } from "../../tools";
import * as ui from "../ui";
import * as auth from "../auth";
import { addTagListener } from "../ui/form/addTag";
import { createListingListener } from "../ui/form/createAuction";
import { addMediaListener } from "../ui/form/addMedia";

export function headerListeners() {
  if (!isLoggedIn()) {
    ui.modalListeners("login");

    ui.modalListeners("register");

    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", loginListener);

    const registerForm = document.querySelector("#registerForm");
    registerForm.addEventListener("submit", registerListener);
  }

  if (isLoggedIn()) {
    ui.dialogListeners("menu");
    ui.modalListeners("createAuction");
    addTagListener();
    addMediaListener();
    auth.logout();

    const createAuctionForm = document.querySelector("#createAuctionForm");
    createAuctionForm.addEventListener("submit", createListingListener);
  }

  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#search");
  const main = document.querySelector("main");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!searchInput.value) {
      return;
    }
    clear(main);
    listings({ search: searchInput.value.trim().toLowerCase() });
    searchInput.value = "";
  });
}
