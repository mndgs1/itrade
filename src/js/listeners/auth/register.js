import * as auth from "../../api/auth/index.js";

export async function registerListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const name = data.get("username");
  const password = data.get("password");
  const avatar = data.get("avatar");

  try {
    await auth.register({ name, email, password, avatar });
  } catch {
    return alert("Oops! There was a problem creating your a account");
  }
}
