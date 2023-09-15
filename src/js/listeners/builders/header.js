import { isLoggedIn } from "../../api/auth";
import { listings } from "../../ui/pages";
import { clear } from "../../tools";
import * as listeners from "../index.js";
import * as auth from "../auth";
import {
  addTagListener,
  createListingListener,
  addMediaListener,
} from "../../listeners/ui/form";

export function headerListeners() {
  if (!isLoggedIn()) {
    listeners.modalListeners("login");

    listeners.modalListeners("register");

    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", listeners.loginListener);

    const registerForm = document.querySelector("#registerForm");
    registerForm.addEventListener("submit", listeners.registerListener);
  }

  if (isLoggedIn()) {
    listeners.dialogListeners("menu");
    listeners.modalListeners("createAuction");
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
