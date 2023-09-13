import { remove } from "../../storage";
export function logout() {
  const logoutButton = document.querySelector("#logout");
  logoutButton.addEventListener("click", () => {
    console.log("click");
    remove("token");
    remove("profile");
  });
}
