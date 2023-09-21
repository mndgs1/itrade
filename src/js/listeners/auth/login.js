import * as auth from "../../api/auth/index.js";
import { save } from "../../storage/save.js";
import { formErrorsMessages } from "../../tools/formErrorsMessages.js";
import { clear } from "../../tools/clear.js";
import { loader } from "../../ui/components/index.js";

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");

  const errorContainer = document.querySelector(`#${event.target.id}Errors`);
  try {
    clear(errorContainer);
    errorContainer.appendChild(loader({ add: true }));

    const { data, error } = await auth.login({ email, password });
    loader({ remove: true });

    if (data) {
      save("token", data.accessToken);
      delete data.accessToken;
      save("profile", data);
      window.location.reload();
    }
    if (error) {
      formErrorsMessages(event, error);
    }
  } catch (error) {
    return alert("Oops there was a problem!");
  }
}
