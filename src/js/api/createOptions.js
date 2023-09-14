import * as storage from "../storage";

export function createOptions({
  method = "GET",
  body,
  auth = false,
  headers = { "Content-Type": "application/json" },
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

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}
