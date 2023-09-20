import { message } from "../ui/components/primary/";
import { clear } from "./clear.js";

export function formErrorsMessages(event, error = {}) {
  const errorContainer = document.querySelector(`#${event.target.id}Errors`);
  clear(errorContainer);
  const errorsArr = error.errors;
  let errorPaths = [];

  errorsArr.forEach((error) => {
    const errorMessage = message({
      warning: true,
      text: `${error.message}`,
    });

    errorContainer.appendChild(errorMessage);

    if ("path" in error) {
      createUniqueErrorPathsArr(error, errorPaths);
    }
  });

  console.log(errorPaths);
  highlightErrorInputs(errorPaths, event.target);
}

function highlightErrorInputs(errorPathsArr, form) {
  if (errorPathsArr.length > 0) {
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

function createUniqueErrorPathsArr(error, errorPaths) {
  error.path.forEach((path) => {
    if (!errorPaths.includes(path)) {
      errorPaths.push(path);
    }
  });
}
