import { setAvatar } from "../../api/profiles";
import { formErrorsMessages } from "../../tools/formErrorsMessages";
import { clear, getSearchParams } from "../../tools";
import { loader, message } from "../../ui/components";
import * as storage from "../../storage";

export async function profileListeners() {
  const avatarButton = document.querySelector("[data='avatarOpen']");
  if (avatarButton) {
    const avatarModal = document.querySelector("[data='avatarModal']");
    avatarButton.addEventListener("click", () => {
      avatarModal.showModal();
    });

    const avatarInput = document.querySelector("#avatar");
    const avatarForm = document.querySelector("#avatarForm");

    avatarForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const errorContainer = document.querySelector(
        `#${event.target.id}Errors`
      );

      const username = getSearchParams().name;

      try {
        clear(errorContainer);
        errorContainer.appendChild(loader({ add: true }));
        const { data, error } = await setAvatar(username, avatarInput.value);

        if (data) {
          clear(errorContainer);
          errorContainer.appendChild(
            message({
              success: true,
              text: "Your avatar was changed succesfully!",
            })
          );
          const profileStored = JSON.parse(storage.load("profile"));
          profileStored.avatar = avatarInput.value;
          storage.save("profile", profileStored);
        }
        if (error) {
          formErrorsMessages(event, error);
        }
      } catch (error) {
        return alert("There was a problem trying connect to the server!");
      }
    });

    const avatarCloseButton = document.querySelector("[data='avatarClose']");
    avatarCloseButton.addEventListener("click", () => {
      avatarModal.close();
    });
  }
}
