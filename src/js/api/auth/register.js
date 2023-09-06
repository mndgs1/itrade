import { apiPath } from "../constants";
import { headers } from "../headers";

export async function register(name, email, password, avatar) {
  const response = await fetch(`${apiPath}/auction/auth/register`, {
    method: "post",
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers("application/json"),
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  } else {
    throw new Error(response.statusText);
  }
}
