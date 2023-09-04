import { link } from "./primary/link";

export function menu() {
  const menu = document.createElement("div");
  menu.appendChild(link({ text: "Profile", path: "/profile" }));
  menu.appendChild(link({ text: "Create Auction", path: "/create-auction" }));
  menu.appendChild(link({ text: "My Auctions", path: "/my-auctions" }));
  menu.appendChild(link({ text: "My Bids", path: "/my-bids" }));
  menu.appendChild(link({ text: "Log Out", path: "/", id: "logout" }));
  // my bids, my auctions, profile, log out, new auction

  return menu;
}
