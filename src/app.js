import { calculateCartSummary } from './utils.js';

const calculateButton = document.getElementById('calculate-button');

const getCartItemRows = () => {
  const tableBody = document.getElementById('cart-items');
  if (!tableBody) {
    return [];
  }
  const rows = tableBody.querySelectorAll('.cart-item-row');
  return Array.from(rows);
};

const displaySummary = (summary) => {
  const totalRawElement = document.getElementById('total-raw');
  const totalFormattedElement = document.getElementById('total-formatted');
  const errorElement = document.getElementById('error-message');

  if (!totalRawElement || !totalFormattedElement || !errorElement) {
    return;
  }

  totalRawElement.textContent = '';
  totalFormattedElement.textContent = '';
  errorElement.textContent = '';

  if (!summary) {
    return;
  }

  if (typeof summary.total === 'number') {
    totalRawElement.textContent = String(summary.total);
  }

  if (typeof summary.formattedTotal === 'string') {
    totalFormattedElement.textContent = summary.formattedTotal;
  }

  if (Array.isArray(summary.invalidItems) && summary.invalidItems.length > 0 && typeof summary.errorMessage === 'string') {
    errorElement.textContent = summary.errorMessage;
  }
};

const handleCalculateClick = () => {
  const rows = getCartItemRows();
  const summary = calculateCartSummary([]);
  displaySummary(summary);
};

if (calculateButton) {
  calculateButton.addEventListener('click', handleCalculateClick);
}
