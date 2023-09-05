import classNames from "classnames";

export function container({
  header,
  specificListing,
  specificListingMedia,
  bids,
  listings,
  tags,
  seller,
  ...rest
}) {
  const containerClasses = classNames(rest.className, "", {
    "header-classes": header,
    "specificListing-classes": specificListing,
    "specificListingMedia-classes": specificListingMedia,
    "bids-classes": bids,
    "2xl": listings,
    "string of classes": tags,
    "string of classes2": seller,
  });

  const containerEl = document.createElement("div");
  containerEl.className = containerClasses;

  return containerEl;
}
