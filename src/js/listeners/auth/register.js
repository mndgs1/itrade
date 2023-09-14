import * as auth from "../../api/auth/index.js";
import { formErrorsMessages } from "../../tools/formErrorsMessages.js";

export async function registerListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const name = data.get("username");
  const password = data.get("password");
  const avatar = data.get("avatar");

  try {
    const { data, error } = await auth.register({
      name,
      email,
      password,
      avatar,
    });

    if (data) {
      console.log(data);
    }
    if (error) {
      formErrorsMessages(event, error);
    }
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
}
