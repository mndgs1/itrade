import * as auth from "../../api/auth/index.js";
import { save } from "../../storage/save.js";
import { formErrorsMessages } from "../../tools/formErrorsMessages.js";

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  try {
    const { data, error } = await auth.login({ email, password });

    if (data) {
      save("token", data.accessToken);
      delete data.accessToken;
      save("profile", data);
      location.href = `./?view=profile&name=${data.name}`;
    }
    if (error) {
      formErrorsMessages(event, error);
    }
  } catch (error) {
    return alert("Oops there was a problem!");
  }
}
