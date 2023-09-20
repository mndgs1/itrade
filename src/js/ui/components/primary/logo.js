export function logo() {
  const logo = document.createElement("a");
  logo.innerHTML = `iTrade`;
  logo.href = "/";
  logo.id = "homeButton";

  return logo;
}
