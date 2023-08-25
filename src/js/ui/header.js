import { isLoggedIn } from "../api/auth";
import { registerModal } from "./registerModal";

export function header() {
  const header = document.createElement("header");

  header.classList.add("py-2", "shadow", "relative");
  header.innerHTML = `            <nav
                class="m-auto flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <a href="/" class="p-2">
                    iTrade
                </a>
                <div>
                    <ul class="flex flex-row items-center">
                        <li>
                            <button class="ml-2 p-2">
                                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>`;

  const body = document.querySelector("body");
  body.appendChild(header);

  const ul = document.querySelector("ul");
  if (!isLoggedIn()) {
    ul.innerHTML += `
          <li class="">
            <button data-open-loginDialog class="ml-2 p-1 px-2 bg-green-400 rounded-md inline-block">Login</button>
          </li>
          <li>
            <button data-open-registerModal class="ml-2 p-1 px-2 bg-blue-500 rounded-md inline-block">Register</button>
            <dialog data-registerModal class="p-10">${registerModal()}</dialog>
          </li>`;

    const openButton = document.querySelector("[data-open-registerModal");
    const modal = document.querySelector("[data-registerModal");

    openButton.addEventListener("click", () => {
      modal.showModal();
    });
  } else {
    ul.innerHTML += `                        
                        <li>
                            <button class="ml-2 p-2">
                                <i class="fa-regular fa-bell fa-lg"></i>
                            </button>
                        </li>
                        <li>
                            <button class="ml-2 p-2">
                                <i class="fa-regular fa-bell fa-lg"></i>
                            </button>
                        </li>`;
  }
}
