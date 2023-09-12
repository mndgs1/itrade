import * as storage from "../storage";

export function createOptions({
  method = "GET",
  body,
  auth = false,
  headers = { contentType: "application/json" },
}) {
  const options = {
    method,
    body,
    headers,
  };

  if (auth) {
    const token = JSON.parse(storage.load("token"));
    options.headers.Authorization = `Bearer ${token}`;
  }

  return options;
}
