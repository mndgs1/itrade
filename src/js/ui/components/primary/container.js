import classNames from "classnames";

export function container({
  header,
  specificListing,
  specificListingMedia,
  bids,
  listing,
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
    "string of classes": tags,
    "string of classes2": seller,
    "profile-classes": profile,
    "border-b border-gray-900/10 pb-12 space-y-4 mt-10": formInputContainer,
    "mt-6 flex items-center justify-end gap-x-6": formButtonsContainer,
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
