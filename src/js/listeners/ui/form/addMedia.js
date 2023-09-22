import { image, message } from "../../../ui/components/primary/";
import { isValidImageUrl } from "../../../tools";

export function addMediaListener() {
  const addTagBtn = document.querySelector("#addMedia");
  addTagBtn.addEventListener("click", () => {
    const mediaInput = document.querySelector("#media");
    const mediaWrap = document.querySelector("#mediaWrap");

    mediaInput.addEventListener("focus", (e) => {
      if (document.querySelector("#mediaError")) {
        document.querySelector("#mediaError").remove();
        e.target.classList.remove("border-2", "border-red-300");
      }
    });

    if (mediaInput.value) {
      const isValidImg = isValidImageUrl(mediaInput.value);
      let src;

      if (isValidImg) {
        src = mediaInput.value;
        const imageEl = image({
          formImage: true,
          src: src,
          data: "medias",
        });
        mediaWrap.appendChild(imageEl);
      } else {
        const errorMessage = message({
          warning: true,
          text: "Image url not valid",
          id: "mediaError",
        });

        mediaInput.classList.add("border-2", "border-red-300");
        mediaWrap.appendChild(errorMessage);
        return;
      }

      mediaInput.value = "";
    }
  });
}
