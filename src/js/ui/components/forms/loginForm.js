import classNames from "classnames";
import { input, button, heading } from "../primary/index.js";
import { inputConfig } from "../constants/inputConfig.js";

export function loginForm() {
  const form = document.createElement("form");
  form.id = "loginForm";
  form.method = "dialog";
  form.appendChild(heading({ h1: true, text: "Login" }));

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

  formWrap.appendChild(input(inputConfig.email));
  formWrap.appendChild(input(inputConfig.password));

  return formWrap;
}

function buttonsWrap() {
  const buttonsWrap = document.createElement("div");
  const wrapClasses = classNames("mt-6 flex items-center justify-end gap-x-6");
  buttonsWrap.className = wrapClasses;

  buttonsWrap.appendChild(
    button({ data: "loginClose", secondary: true, text: "Close" })
  );
  buttonsWrap.appendChild(
    button({
      type: "submit",
      success: true,
      text: "Login",
      id: "loginSubmitBtn",
    })
  );

  return buttonsWrap;
}
