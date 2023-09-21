import { image } from "../../../ui/components/primary/";

export function addMediaListener() {
  const addTagBtn = document.querySelector("#addMedia");
  addTagBtn.addEventListener("click", () => {
    const mediaInput = document.querySelector("#media");
    const mediaWrap = document.querySelector("#mediaWrap");

    if (mediaInput.value) {
      const isValidImg = isValidImageUrl(mediaInput.value);
      let src;
      if (isValidImg) {
        src = mediaInput.value;
      } else {
        src = "../assets/Placeholder_image.webp";
      }

      const imageEl = image({
        formImage: true,
        src: src,
        data: "medias",
        onClickDelete: true,
      });
      mediaWrap.appendChild(imageEl);
      mediaInput.value = "";
    }
  });
}

function isValidImageUrl(url) {
  // Define a list of valid image file extensions
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];

  // Extract the file extension from the URL
  const urlExtension = url.split(".").pop().toLowerCase();

  if (imageExtensions.includes(urlExtension)) {
    return true;
  } else {
    return false;
  }
}
