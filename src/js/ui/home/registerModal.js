import { registerListener } from "../../listeners";

export function registerModal() {
  const modal = document.querySelector("[data-registerModal");
  const form = createRegisterFormElement();
  modal.appendChild(form);

  const openButton = document.querySelector("[data-open-registerModal");
  const closeButton = document.querySelector("[data-close-registerModal");
  document
    .querySelector("#registerForm")
    .addEventListener("submit", registerListener);

  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}

function createRegisterFormElement() {
  const form = document.createElement("form");
  form.id = "registerForm";

  form.innerHTML = `
<h1 class="text-2xl font-semibold leading-7  text-gray-900">Registration Form</h1>
  <div class="space-y-12 mt-10">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username*</label>
          <div class="mt-2">
            <input type="text" name="username" id="username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="janesmith">
          </div>
        </div>

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
        
        <div class="sm:col-span-6">
          <label for="avatar" class="block text-sm font-medium leading-6 text-gray-900">Avatar URL</label>
          <div class="mt-2">
            <input id="avatar" name="avtar" type="text" class="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="https://www.myavatar.com/avatar">
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button data-close-registerModal type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
  </div>
`;

  return form;
}
