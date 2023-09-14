import { makeApiCall, createOptions } from "..";

export async function setAvatar(username, avatarUrl) {
  const endpoint = `/auction/profiles/${username}/media`;

  const options = createOptions({
    method: "PUT",
    body: { avatar: avatarUrl },
    auth: true,
  });

  const { data, error } = await makeApiCall(endpoint, options);

  return { data, error };
}
