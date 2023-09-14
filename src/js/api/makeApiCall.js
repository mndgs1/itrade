import { apiPath } from "./constants";

export async function makeApiCall(endpoint, options = {}) {
  let data, error;

  try {
    const response = await fetch(`${apiPath}${endpoint}`, options);
    const json = await response.json();

    if (response.ok) {
      data = json;
    } else {
      error = json;
    }
  } catch (err) {
    console.log(err);
  }

  return { data, error };
}
