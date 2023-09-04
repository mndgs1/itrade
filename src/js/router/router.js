import { header } from "../ui/header";
import { listings } from "../ui/listings";
import { main } from "../ui/main";
import { headerListeners } from "../listeners/ui/headerListeners";

export default function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      header();
      headerListeners();
      main();
      listings();
      break;
    case "/listings/listing":
      header();
      headerListeners();
      main();
  }
}
