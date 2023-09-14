import { image } from "../../../ui/components/primary/";

export function addMediaListener() {
  const addTagBtn = document.querySelector("#addMedia");
  addTagBtn.addEventListener("click", () => {
    const mediaInput = document.querySelector("#media");
    const mediaWrap = document.querySelector("#mediaWrap");

    if (mediaInput.value) {
      const imageEl = image({
        formImage: true,
        src: mediaInput.value,
        data: "medias",
      });
      mediaWrap.appendChild(imageEl);
      mediaInput.value = "";
    }
  });
}
