export const load = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
