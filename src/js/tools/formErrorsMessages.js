import { message } from "../ui/components/primary/message.js";
import { clear } from "./clear.js";

export function formErrorsMessages(event, error = {}) {
  const errorContainer = document.querySelector(`#${event.target.id}Errors`);
  clear(errorContainer);

  error.errors.forEach((error) => {
    errorContainer.appendChild(message({ warning: true, text: error.message }));
  });
}
