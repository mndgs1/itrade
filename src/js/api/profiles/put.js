import { makeApiCall, createOptions } from "..";

export async function setAvatar(username, avatarUrl) {
  const endpoint = `/auction/profiles/${username}/media`;

  const optionsBody = { avatar: avatarUrl };

  const options = createOptions({
    method: "put",
    body: JSON.stringify(optionsBody),
    auth: true,
    headers: {
      contentType: "application/json",
    },
  });

  console.log(options);
  const { data, error } = await makeApiCall(endpoint, options);

  if (error) {
    return error;
  }

  return data;
}
