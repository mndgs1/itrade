import { setAvatar } from "../../api/profiles";
import { formErrorsMessages } from "../../tools/formErrorsMessages";

export async function profileListeners() {
  const avatarModal = document.querySelector("[data='avatarModal']");
  const avatarButton = document.querySelector("[data='avatarOpen']");
  avatarButton.addEventListener("click", () => {
    avatarModal.showModal();
  });

  const avatarInput = document.querySelector("#avatar");
  const avatarForm = document.querySelector("#avatarForm");

  avatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = new URL(window.location.href);

    const searchParams = url.searchParams;
    const username = searchParams.get("name");

    const { data, error } = await setAvatar(username, avatarInput.value);

    if (data) {
      console.log("ADD SUCESS MESSAGE");
    }
    if (error) {
      formErrorsMessages(e, error);
    }
  });

  const avatarCloseButton = document.querySelector("[data='avatarClose']");
  avatarCloseButton.addEventListener("click", () => {
    avatarModal.close();
  });
}
