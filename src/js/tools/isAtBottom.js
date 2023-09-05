export function isAtBottom() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  const threshold = 99;

  return windowHeight + scrollPosition >= documentHeight - threshold;
}
