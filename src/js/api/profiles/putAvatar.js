import { apiPath } from "../constants";
import { headers } from "../headers";

export async function putAvatar(name, avatar) {
  const response = await fetch(`${apiPath}/auction/profiles/${name}/media`, {
    method: "put",
    body: JSON.stringify({ avatar }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
