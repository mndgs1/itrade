import { header } from "./components/header";
import { main } from "./components/main.js";
import { listings } from "./components/listings.js";
import { headerListeners } from "../listeners/ui/headerListeners";

export default () => {
  header();
  headerListeners();
  main();
  listings();
};
