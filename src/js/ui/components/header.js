import classNames from "classnames";
import { navigation } from "./navigation";
import { logo } from "./primary/logo";

export function header() {
  const header = document.createElement("header");
  const headerClasses = classNames("py-2 shadow relative");
  header.className = headerClasses;

  const body = document.querySelector("body");

  header.appendChild(headerContentWrap());
  body.appendChild(header);
}

// creates content wrap& adds content
function headerContentWrap() {
  const wrap = document.createElement("div");
  const wrapClasses = classNames(
    "m-auto flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
  );
  wrap.className = wrapClasses;
  wrap.appendChild(logo());

  wrap.appendChild(navigation());

  return wrap;
}
