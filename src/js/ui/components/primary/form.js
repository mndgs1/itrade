import { heading, container, input, button } from "./";

export function form({
  id,
  headingEl,
  inputs,
  buttons,
  method,
  formWrap,
  buttonWrap,
}) {
  const form = document.createElement("form");

  if (id) {
    form.id = id;
  }
  if (method) {
    form.method = method;
  }

  if (headingEl) {
    if (typeof headingEl === "string") {
      form.appendChild(heading({ h1: true, text: headingEl }));
    } else {
      form.appendChild(headingEl);
    }
  }

  if (inputs) {
    if (formWrap) {
      const inputContainer = container({ formInputContainer: true });
      inputs.forEach((inputConfig) => {
        inputContainer.appendChild(input(inputConfig));
      });
      form.appendChild(inputContainer);
    } else {
      inputs.forEach((inputConfig) => {
        form.appendChild(input(inputConfig));
      });
    }
  }

  if (buttons) {
    if (buttonWrap) {
      const buttonsContainer = container({ formButtonsContainer: true });
      buttons.forEach((buttonConfig) => {
        buttonsContainer.appendChild(button(buttonConfig));
      });
      form.appendChild(buttonsContainer);
    } else {
      buttons.forEach((buttonConfig) => {
        form.appendChild(button(buttonConfig));
      });
    }
  }

  return form;
}
