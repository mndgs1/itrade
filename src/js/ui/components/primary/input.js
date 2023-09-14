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
  customClasses,
  textarea,
  labelHidden,
}) {
  const wrap = document.createElement("div");
  wrap.id = `${id}Wrap`;
  const wrapClasses = classNames(customClasses, "", {
    "max-w-sm": short,
    "sm:w-4/12": long,
    "relative shadow-sm sm:w-72": search,
  });

  wrap.className = wrapClasses;

  if (label) {
    wrap.appendChild(createLabel(id, label, labelHidden));
  }
  wrap.appendChild(createInput(id, attributes, textarea, button));

  if (text) {
    wrap.appendChild(message({ text: text, input: true }));
  }

  return wrap;
}

function createLabel(id, label, hiddenLabel) {
  const labelEl = document.createElement("label");
  let labelClasses;
  if (hiddenLabel) {
    labelClasses = classNames("sr-only");
  } else {
    labelClasses = classNames("block");
  }
  labelEl.className = labelClasses;
  labelEl.setAttribute("for", id);
  labelEl.innerText = label;

  return labelEl;
}

function createInput(id, attributes, textarea, button) {
  let inputEl;
  if (textarea) {
    inputEl = document.createElement("textarea");
  } else {
    inputEl = document.createElement("input");
  }

  for (const attribute in attributes) {
    inputEl.setAttribute(attribute, attributes[attribute]);
  }

  inputEl.setAttribute("id", id);
  inputEl.setAttribute("name", id);
  const inputClasses = classNames(
    "block w-full rounded-md border-0  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
  );
  inputEl.className = inputClasses;

  if (button) {
    const inputWrap = document.createElement("div");
    const inputWrapClasses = classNames("relative flex items-center");
    inputWrap.className = inputWrapClasses;

    button.classList.add("absolute", "right-0");
    inputWrap.appendChild(inputEl);
    inputWrap.appendChild(button);
    return inputWrap;
  }

  return inputEl;
}
