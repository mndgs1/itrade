export function changePageMeta({ title, description }) {
  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.setAttribute("content", description);

  const titleEl = document.querySelector("title");
  titleEl.innerText = `${title} | iTrade`;
}
