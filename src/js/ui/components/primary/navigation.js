import { link, button } from ".";
import { load } from "../../../storage";

export function navigation() {
  const navigation = document.createElement("nav");
  const profile = JSON.parse(load("profile"));
  const list = document.createElement("ul");
  const menuLinks = [
    button({
      primary: true,
      text: "Create Auction",
      data: "createAuctionOpen",
    }),
    link({ text: "My Profile", path: `/profile?name=${profile.name}` }),
    link({ text: "My Auctions", path: "/my-auctions" }),
    link({ text: "My Bids", path: "/my-bids" }),
    link({ text: "Log Out", path: "/", id: "logout" }),
  ];

  menuLinks.forEach((link) => {
    const linkEl = document.createElement("li");
    linkEl.appendChild(link);
    list.appendChild(linkEl);
  });

  navigation.appendChild(list);

  return navigation;
}
