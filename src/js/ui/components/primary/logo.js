export function logo() {
  const logo = document.createElement("a");
  logo.classList.add("p-2");
  logo.innerHTML = `iTrade`;
  logo.href = "/";
  logo.id = "homeButton";

  return logo;
}
