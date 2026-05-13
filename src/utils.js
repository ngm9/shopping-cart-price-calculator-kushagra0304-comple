export const calculateCartSummary = (items) => {
  const invalidItems = [];
  let total = 0;

  for (const item of items) {
    const price = parseFloat(item.price);
    const qty = parseFloat(item.qty);

    const priceInvalid = item.price === '' || isNaN(price) || price < 0;
    const qtyInvalid = item.qty === '' || isNaN(qty) || qty < 0 || !Number.isInteger(qty);

    if (priceInvalid || qtyInvalid) {
      invalidItems.push(item);
      continue;
    }

    total += price * qty;
  }

  total = Math.round(total * 100) / 100;

  const formattedTotal = invalidItems.length === items.length && items.length > 0
    ? 'N/A'
    : `$${total.toFixed(2)} USD`;

  const errorMessage = invalidItems.length > 0
    ? `${invalidItems.length} item(s) skipped due to invalid price or quantity.`
    : '';

  return { total, formattedTotal, invalidItems, errorMessage };
};
