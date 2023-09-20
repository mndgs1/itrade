export function getSearchParams() {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams);
}
