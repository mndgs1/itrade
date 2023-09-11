import classNames from "classnames";
import { input } from "../primary/index.js";
import { inputConfig } from "../constants/inputConfig.js";

export function searchForm() {
  const form = document.createElement("form");
  form.id = "searchForm";
  const formClasses = classNames("");
  form.className = formClasses;
  form.appendChild(input(inputConfig.search));

  return form;
}
