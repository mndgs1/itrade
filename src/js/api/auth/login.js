import { makeApiCall, createOptions } from "../";

export async function login(bodyData = {}) {
  const endpoint = "/auction/auth/login";

  const options = createOptions({ method: "POST", body: bodyData });
  const { data, error } = await makeApiCall(endpoint, options);

  return { data, error };
}
