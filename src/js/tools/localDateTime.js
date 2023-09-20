export function localDateTime(date) {
  const dateEl = new Date(date);
  const dateLocal = dateEl.toLocaleString();
  return dateLocal;
}
