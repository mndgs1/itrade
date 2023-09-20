import { isLoggedIn } from "../../api/auth";
import { listings } from "../../ui/pages";
import { clear } from "../../tools";
import * as listeners from "../index.js";

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
    listeners.addTagListener();
    listeners.addMediaListener();
    listeners.logout();

    const createAuctionForm = document.querySelector("#createAuctionForm");
    createAuctionForm.addEventListener(
      "submit",
      listeners.createListingListener
    );
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
