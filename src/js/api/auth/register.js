import { makeApiCall, createOptions } from "../";

export async function register(bodyData = {}) {
  const endpoint = "/auction/auth/register";

  const options = createOptions({ method: "POST", body: bodyData });
  const { data, error } = await makeApiCall(endpoint, options);

  return { data, error };
}
