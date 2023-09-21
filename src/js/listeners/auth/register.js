import * as auth from "../../api/auth/index.js";
import { handleApiCall } from "../../tools/handleApiCall.js";

export async function registerListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  const avatar = data.get("avatar");

  handleApiCall({
    apiData: { name, email, password, avatar },
    apiFunction: auth.register,
    successMessage: "Your Account was created succesfully!",
    onErrorMessage: "Oops! There was a problem creating your a account",
    event,
  });
}
