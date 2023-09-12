import { makeApiCall } from "../";

export async function getListings({
  limit = 20,
  offset = 0,
  seller = false,
  bids = true,
  tag = "",
  active = true,
} = {}) {
  const endpoint = `/auction/listings?limit=${limit}&offset=${offset}&_seller=${seller}&_bids=${bids}&_tag=${tag}&active=${active}`;

  const { data, error } = await makeApiCall(endpoint);

  if (error) {
    return error;
  }

  return data;
}

export async function getListing(id) {
  const endpoint = `/auction/listings/${id}`;
  const { data, error } = await makeApiCall(endpoint);
  if (error) {
    return error;
  }

  return data;
}
// (limit = 20), (offset = 0), (seller = false), (bids = true), (tags = []), (active = true);
