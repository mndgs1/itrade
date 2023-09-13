import { header } from "../ui/header";
import { listings } from "../ui/pages/listings";
import { main } from "../ui/main";
import {
  headerListeners,
  profileListeners,
} from "../listeners/ui/headerListeners";
import { specificListing } from "../ui/pages/specificListing";
import { profile } from "../ui";
import { footer } from "../ui/footer";

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      header();
      main();
      headerListeners();
      listings({});
      footer();

      break;
    case "/listings/listing":
      header();
      main();
      headerListeners();
      specificListing();
      footer();
      break;
    case "/profile":
      header();
      main();
      headerListeners();
      profile();
      profileListeners();
      footer();
  }
}
