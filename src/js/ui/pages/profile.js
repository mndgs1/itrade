import { container } from "../components/primary";
import { clear } from "../../tools";

export function profile() {
  const main = document.querySelector("main");
  clear(main);
  const profileEl = container({ profile });
  main.appendChild(profileEl);
}
