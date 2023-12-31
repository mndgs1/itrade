import classNames from "classnames";

export function container({
  header,
  specificListing,
  specificListingMedia,
  bids,
  listing,
  listings,
  tags,
  seller,
  profile,
  formInputContainer,
  formButtonsContainer,
  customClasses,
  id,
  data,
}) {
  const containerClasses = classNames(customClasses, "", {
    "header-classes": header,
    "specificListing-classes": specificListing,
    "specificListingMedia-classes": specificListingMedia,
    "bids-classes": bids,
    "2xl": listing,
    "grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5":
      listings,
    "string of classes": tags,
    "string of classes2": seller,
    "md:flex md:gap-3 mb-3": profile,
    "border-b border-gray-900/10 pb-12 space-y-4 mt-10": formInputContainer,
    "mt-6 flex items-center justify-end gap-x-6 mb-2": formButtonsContainer,
  });

  const containerEl = document.createElement("div");
  containerEl.className = containerClasses;

  if (id) {
    containerEl.id = id;
  }

  if (data) {
    containerEl.setAttribute("data", data);
  }

  return containerEl;
}
