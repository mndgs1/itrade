import classNames from "classnames";
import { logo, message, container } from "../primary";

export function footer() {
  const header = document.createElement("footer");
  const headerClasses = classNames("py-2 shadow relative mt-12");
  header.className = headerClasses;

  const body = document.querySelector("body");

  header.appendChild(headerContentWrap());
  body.appendChild(header);
}

// creates content wrap& adds content
function headerContentWrap() {
  const wrap = container({});
  const wrapClasses = classNames(
    "px-4 m-auto flex justify-center gap-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
  );
  wrap.className = wrapClasses;
  wrap.appendChild(logo());

  wrap.appendChild(message({ text: "Copyright iTrade", primary: true }));

  return wrap;
}
