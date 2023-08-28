import { apiPath } from "../constants";
import { headers } from "../headers";

export async function getListings(
  limit = 20,
  offset = 0,
  seller = false,
  bids = true,
  tags = [],
  active = true
) {
  const response = await fetch(
    `${apiPath}/auction/listings?limit=${limit}&offset=${offset}&_seller=${seller}&_bids=${bids}&tags=${tags}&active=${active}`,
    { headers: headers() }
  );

  if (response.ok) {
    return response.json();
  }
}

export async function getListing(id) {
  const response = await fetch(`${apiPath}/auction/listings/${id}`);

  if (response.ok) {
    return response.json();
  }
}
