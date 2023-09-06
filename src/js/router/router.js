import { header } from "../ui/header";
import { listings } from "../ui/pages/listings";
import { main } from "../ui/main";
import { headerListeners } from "../listeners/ui/headerListeners";
import { specificListing } from "../ui/pages/specificListing";
import { profile } from "../ui";
import { footer } from "../ui/footer";

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      header();
      headerListeners();
      main();
      listings();
      footer();

      break;
    case "/listings/listing":
      header();
      headerListeners();
      main();
      specificListing();
      footer();
      break;
    case "/profile":
      header();
      headerListeners();
      main();
      profile();
      footer();
  }
}
