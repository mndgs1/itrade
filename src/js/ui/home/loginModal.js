import { loginListener } from "../../listeners";

export function loginModal() {
  const modal = document.querySelector("[data-loginModal");
  const form = createLoginElement();
  modal.appendChild(form);

  const openButton = document.querySelector("[data-open-loginModal");
  const closeButton = document.querySelector("[data-close-loginModal");

  document
    .querySelector("#loginForm")
    .addEventListener("submit", loginListener);

  openButton.addEventListener("click", () => {
    modal.show();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

function createLoginElement() {
  const form = document.createElement("form");
  form.id = "loginForm";

  form.innerHTML = `
    <div>
      <div class="sm:col-span-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address*</label>
        <div class="mt-2">
          <input pattern="^[\\w\\-.]+@(stud\\.)?noroff\\.no$" title="Only Noroff student or teacher emails are valid." id="email" name="email" type="email" autocomplete="email"  required class="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="janesmith@gmail.com">
        </div>
      </div>

      <div class="sm:col-span-4">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Password*</label>
        <div class="mt-2">
          <input id="password" name="password" type="password" minlength="8" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

       <div class="mt-6 flex items-center justify-end gap-x-6">
         <button data-close-loginModal type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
         <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
       </div>
    </div>
`;

  return form;
}
