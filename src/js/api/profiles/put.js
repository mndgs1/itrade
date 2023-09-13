import { makeApiCall, createOptions } from "..";

export async function setAvatar(username, avatarUrl) {
  const endpoint = `/auction/profiles/${username}/media`;

  const options = createOptions({
    method: "PUT",
    body: JSON.stringify({ avatar: avatarUrl }),
    auth: true,
  });

  console.log(options);
  const { data, error } = await makeApiCall(endpoint, options);

  if (error) {
    return error;
  }

  return data;
}
