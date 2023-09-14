import { makeApiCall, createOptions } from "../";

export async function postListing(bodyData = {}) {
  const endpoint = "/auction/listings";

  const options = createOptions({ method: "POST", body: bodyData, auth: true });
  const { data, error } = await makeApiCall(endpoint, options);

  return { data, error };
}
