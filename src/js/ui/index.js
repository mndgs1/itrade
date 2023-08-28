import { header } from "./header.js";
import { main } from "./main.js";
import { listings } from "./home/listings.js";

export default () => {
  header();
  main();
  listings();
};
