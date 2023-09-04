import classNames from "classnames";

export function main() {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const mainClasses = classNames(
    "px-4 m-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
  );
  main.className = mainClasses;
  body.appendChild(main);
}
