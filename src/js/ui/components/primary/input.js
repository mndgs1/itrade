import classNames from "classnames";
import { message } from "./message";

export function input({ long, short, id, label, text, attributes, ...rest }) {
  const wrap = document.createElement("div");
  const wrapClasses = classNames(rest.className, "font-serif", {
    "max-w-sm": short,
    "sm:col-span-6": long,
  });

  wrap.className = wrapClasses;
  if (label) {
    wrap.appendChild(createLabel(id, label));
  }
  wrap.appendChild(createInput(id, attributes));

  if (text) {
    wrap.appendChild(message({ text: text, input: true }));
  }

  return wrap;
}

function createLabel(id, label) {
  const labelEl = document.createElement("label");
  const labelClasses = classNames("font-serif block ");
  labelEl.className = labelClasses;
  labelEl.setAttribute("for", id);
  labelEl.innerText = label;

  return labelEl;
}

function createInput(id, attributes) {
  const inputEl = document.createElement("input");

  for (const attribute in attributes) {
    inputEl.setAttribute(attribute, attributes[attribute]);
  }

  inputEl.setAttribute("id", id);
  inputEl.setAttribute("name", id);
  const inputClasses = classNames(
    "mt-1 block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  );
  inputEl.className = inputClasses;

  return inputEl;
}
