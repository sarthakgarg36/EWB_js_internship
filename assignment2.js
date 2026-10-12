// Assignment 2: Operators, Expressions, and Input Handling
// Uses prompt() in the browser. In Node.js (no prompt), it falls back to default values.

const ask = (message, defaultValue) =>
  typeof prompt === "function" ? prompt(message, defaultValue) : defaultValue;

// prompt() always returns a string, so convert explicitly with Number()
const subtotal = Number(ask("Enter the bill amount ($):", "100"));
const tipPercentage = Number(ask("Enter the tip percentage (%):", "15"));

const tip = (subtotal * tipPercentage) / 100;   // arithmetic operators
let total = subtotal;
total += tip;                                    // assignment operator

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);