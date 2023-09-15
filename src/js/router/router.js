import { listings, profile } from "../ui/pages";
import { headerListeners, profileListeners } from "../listeners/builders/";
import { specificListing } from "../ui/pages/specificListing";
import { footer, header, main } from "../ui/components/secondary";

export default async function router() {
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
      await profile();
      profileListeners();
      footer();
  }
}
