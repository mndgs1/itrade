import { tag } from "../../../ui/components/primary/tag";

export function addTagListener() {
  const addTagBtn = document.querySelector("#addTag");
  addTagBtn.addEventListener("click", () => {
    const tagInput = document.querySelector("#tags");
    const tagWrap = document.querySelector("#tagsWrap");

    if (tagInput.value) {
      tagWrap.appendChild(tag({ text: tagInput.value, delBtn: true }));
      tagInput.value = "";
    }
  });
}
