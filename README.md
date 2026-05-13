# Task Overview

Utkrusht's operations team needs a lightweight browser tool to review simple orders for assessment packages before sending payment links. The page already lists a few line items with fields for price and quantity, along with a button to calculate the total. Your job is to wire up the JavaScript so that it reads the visible data, validates it, and updates the summary area with an accurate total and a clear message. The focus is on getting correct calculations, meaningful feedback for invalid input, and clean, maintainable code.

### Helpful Tips
- Consider how different kinds of user input should be interpreted before performing any calculations
- Think about how to safely read values from multiple related DOM elements and group them as data
- Explore simple ways to handle invalid or missing values so the page does not show confusing results
- Review how small, focused functions can keep data processing and DOM updates easy to understand

### Objectives
- Allow the user to enter prices and quantities for several line items and trigger a calculation from the page
- Process all visible items to compute an overall order total and a readable summary text
- Handle invalid or missing item data gracefully so that totals are not misleading or broken
- Keep the JavaScript organized so the core calculation logic is reusable and separate from UI concerns

### How to Verify
- Change the numbers in the item rows and confirm the total and summary update when the button is used
- Try leaving fields empty or entering non-numeric values and check that the result is handled predictably
- Inspect the page and console to ensure there are no runtime errors when interacting with the UI
- Review your code to confirm it is easy to follow, avoids duplication, and uses modern JavaScript features
