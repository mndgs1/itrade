import { makeApiCall, createOptions } from "..";

export async function setAvatar(username, avatarUrl) {
  const endpoint = `/auction/profiles/${username}/media`;

  const body = {
    avatar: avatarUrl,
  };
  const options = createOptions({
    method: "PUT",
    body: body,
    auth: true,
  });

  const { data, error } = await makeApiCall(endpoint, options);

  if (error) {
    return error;
  }

  return data;
}
