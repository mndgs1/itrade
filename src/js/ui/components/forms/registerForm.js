import classNames from "classnames";
import { input, button, heading } from "../primary/index.js";
import { inputConfig } from "../constants/inputConfig.js";

export function registerForm() {
  const form = document.createElement("form");
  form.id = "registerForm";
  form.appendChild(heading({ h1: true, text: "Registration form" }));

  form.appendChild(formWrap());
  form.appendChild(buttonsWrap());

  return form;
}

function formWrap() {
  const formWrap = document.createElement("div");
  const wrapClasses = classNames(
    "border-b border-gray-900/10 pb-12 space-y-4 mt-10"
  );
  formWrap.className = wrapClasses;

  formWrap.appendChild(input(inputConfig.username));
  formWrap.appendChild(input(inputConfig.email));
  formWrap.appendChild(input(inputConfig.password));
  formWrap.appendChild(input(inputConfig.avatar));

  return formWrap;
}

function buttonsWrap() {
  const buttonsWrap = document.createElement("div");
  const wrapClasses = classNames("mt-6 flex items-center justify-end gap-x-6");
  buttonsWrap.className = wrapClasses;

  buttonsWrap.appendChild(
    button({ data: "registerClose", secondary: true, text: "Close" })
  );
  buttonsWrap.appendChild(
    button({
      type: "submit",
      primary: true,
      text: "Register",
      id: "registerSubmitBtn",
    })
  );

  return buttonsWrap;
}
