import { message } from "../ui/components/primary/message.js";
import { clear } from "./clear.js";

export function formErrorsMessages(event, error = {}) {
  const errorContainer = document.querySelector(`#${event.target.id}Errors`);
  clear(errorContainer);
  const errorsArr = error.errors;
  const errorPaths = [];
  errorsArr.forEach((error) => {
    errorContainer.appendChild(
      message({ warning: true, text: `*${error.path[0]}: ${error.message}` })
    );

    error.path.forEach((path) => {
      if (!errorPaths.includes(path)) {
        errorPaths.push(path);
      }
    });
  });

  console.log(errorPaths);
  highlightErrorInputs(errorPaths, event.target);
}

function highlightErrorInputs(errorPathsArr, form) {
  if (errorPathsArr) {
    errorPathsArr.forEach((path) => {
      const errorInput = document.querySelector(`#${form.id} #${path}`);
      errorInput.classList.add("border-red-300", "border-2");
      errorInput.addEventListener("focusout", () => {
        errorInput.classList.remove("border-2");
        errorInput.classList.remove("border-red-300");
      });
    });
  }
}
