import { clear, formErrorsMessages } from "./";
import { loader, message } from "../ui/components";

export async function handleApiCall({
  apiData,
  apiFunction,
  successMessage,
  onErrorMessage,
  reload = false,
  event,
}) {
  const errorContainer = document.querySelector(`#${event.target.id}Errors`);
  try {
    clear(errorContainer);
    errorContainer.appendChild(loader({ add: true }));
    const { data, error } = await apiFunction(apiData);

    if (data) {
      clear(errorContainer);
      errorContainer.appendChild(
        message({
          success: true,
          text: successMessage,
        })
      );
      if (reload) {
        location.reload();
      }
    }
    if (error) {
      formErrorsMessages(event, error);
    }
  } catch {
    return alert(onErrorMessage);
  }
}
