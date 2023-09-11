import classNames from "classnames";
import { message } from "./message";

export function input({
  search,
  long,
  short,
  id,
  label,
  text,
  attributes,
  button,
  ...rest
}) {
  const wrap = document.createElement("div");
  const wrapClasses = classNames(rest.className, "font-serif", {
    "max-w-sm": short,
    "sm:w-4/12": long,
    "relative shadow-sm sm:w-72": search,
  });

  wrap.className = wrapClasses;
  if (label) {
    wrap.appendChild(createLabel(id, label));
  }
  wrap.appendChild(createInput(id, attributes));

  if (text) {
    wrap.appendChild(message({ text: text, input: true }));
  }

  if (button) {
    wrap.appendChild(createButtonWrap(button));
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
    "block w-full rounded-md border-0  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
  );
  inputEl.className = inputClasses;

  return inputEl;
}

function createButtonWrap(button) {
  const buttonWrap = document.createElement("div");
  const buttonWrapClasses = classNames(
    "absolute inset-y-0 right-0 flex items-center"
  );
  buttonWrap.className = buttonWrapClasses;

  buttonWrap.appendChild(button);

  return buttonWrap;
}
