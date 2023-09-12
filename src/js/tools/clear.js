export function clear(parent) {
  if (typeof parent === "string") {
    parent = document.querySelector(parent);
  }

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
