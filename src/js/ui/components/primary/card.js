import { heading, message, image } from "./";

export function card({ img, title, price, bidCount, placeholder, id }) {
  const cardWrap = document.createElement("a");
  cardWrap.href = `listings/listing?id=${id}`;
  const card = document.createElement("div");

  if (placeholder) {
    card.innerHTML = `<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
      <div class="grid grid-cols-3 gap-4">
      <div class="h-2 bg-slate-700 rounded col-span-2"></div>
      <div class="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-slate-700 rounded"></div>
      </div>
      </div>
      </div>
      </div>`;
    return cardWrap;
  }
  cardWrap.appendChild(card);

  card.appendChild(image({ src: img, listingsCard: true }));
  card.appendChild(heading({ h2: true, text: title }));
  card.appendChild(message({ secondary: true, text: `${price} kr` }));
  card.appendChild(message({ secondary: true, text: `Bids: ${bidCount}` }));
  return cardWrap;
}
