import * as storage from "../storage";

export function createOptions({
  method = "GET",
  body,
  auth = false,
  headers = { contentType: "application/json" },
}) {
  const bodyJson = JSON.stringify(body);
  const options = {
    method,
    body: bodyJson,
    headers,
  };

  if (auth) {
    const token = JSON.parse(storage.load("token"));
    options.headers.Authorization = `Bearer ${token}`;
  }

  return options;
}
