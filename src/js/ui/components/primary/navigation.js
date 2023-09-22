import { link, button } from ".";
import { load } from "../../../storage";

export function navigation() {
  const navigation = document.createElement("nav");
  const profile = JSON.parse(load("profile"));
  const list = document.createElement("ul");
  const location = window.location;
  const currentUser = JSON.parse(load("profile")).name;

  const menuLinks = [
    button({
      primary: true,
      text: "Create Auction",
      data: "createAuctionOpen",
    }),
    link({
      text: "Listings",
      path: "/",
      nav: true,
      customClasses:
        location.pathname === "/index.html" || location.pathname === "/"
          ? "underline"
          : "",
    }),
    link({
      text: "My Profile",
      path: `/profile?name=${profile.name}`,
      nav: true,

      customClasses:
        location.pathname + location.search === `/profile?name=${currentUser}`
          ? "underline"
          : "",
    }),
    // link({ text: "My Bids", path: "/my-bids" }),
    link({
      text: "Log Out",
      path: "/",
      nav: true,

      id: "logout",
      customClasses: "mt-4",
    }),
  ];

  menuLinks.forEach((link) => {
    const linkEl = document.createElement("li");
    linkEl.appendChild(link);
    list.appendChild(linkEl);
  });

  navigation.appendChild(list);

  return navigation;
}
