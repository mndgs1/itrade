import { apiPath } from "../constants";
import { headers } from "../headers";

export async function login(name, password) {
  const response = await fetch(`${apiPath}/social/auth/login`, {
    method: "post",
    body: JSON.stringify({ name, password }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
