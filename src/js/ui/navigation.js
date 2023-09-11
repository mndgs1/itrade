import { link } from "./components/primary/link";

export function navigation() {
  const navigation = document.createElement("nav");
  const list = document.createElement("ul");
  const menuLinks = [
    link({ text: "Profile", path: "/profile" }),
    link({ text: "Create Auction", path: "/create-auction" }),
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
