export function latestBid(bids) {
  let lastBid = 0;

  if (bids.length !== 0) {
    const lastBidIndex = bids.length - 1;
    const lastBidAmount = bids[lastBidIndex].amount;

    lastBid = lastBidAmount;
  }

  return lastBid;
}
