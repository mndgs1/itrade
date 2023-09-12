import { makeApiCall, createOptions } from "..";

export async function getProfile(username) {
  const endpoint = `/auction/profiles/${username}`;

  const options = createOptions({ auth: true });

  const { data, error } = await makeApiCall(endpoint, options);

  if (error) {
    return error;
  }

  return data;
}

export async function getProfiles() {
  const endpoint = `/auction/profiles`;

  const options = createOptions({ auth: true });

  const { data, error } = await makeApiCall(endpoint, options);

  if (error) {
    return error;
  }

  return data;
}
