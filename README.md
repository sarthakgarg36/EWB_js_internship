# JavaScript Internship: Assignments & Capstone Project

This repository contains my solutions to six JavaScript assignments and a capstone mini project, completed as part of my internship.

## Contents

| File | Topic |
|------|-------|
| `assignment1.js` | Variables, data types, and `typeof` |
| `assignment2.js` | Operators, expressions, `prompt()` input, and type conversion |
| `assignment3.js` | Conditional logic: `if...else`, `switch`, and ternary operator |
| `assignment4.js` | Loops: `for`, `while` with `break`, `do...while` with `continue` |
| `assignment5.js` | Functions, arrow functions, default parameters, and scope |
| `assignment6.js` | Arrays and objects: `forEach()`, `filter()`, and `map()` |
| `capstoneproject.js` | Interactive Product Inventory & Analytics Dashboard |

## Capstone Project: Product Inventory & Analytics Dashboard

A console-based application that combines all the core concepts from the assignments:

- **Input handling:** takes a product name and price with `prompt()` and converts them with `Number()`
- **Validation:** uses `if...else` and a retry loop with `continue` and `break` for bad or missing input
- **Categories:** uses `switch` to label items as Budget (under $50), Standard (under $500), or Premium
- **Functions:** a regular function calculates the total inventory value, and an arrow function applies optional tax and discount
- **Array methods:** `forEach()` prints the inventory, `filter()` finds affordable items, and `map()` builds the report

### Sample output

```
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]
--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard
--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
```

## How to Run

### Option 1: Node.js (terminal)

1. Install [Node.js](https://nodejs.org) (LTS version).
2. Open a terminal in the project folder.
3. Run any file:

```bash
node assignment1.js
node capstoneproject.js
```

> **Note:** `prompt()` only works in browsers. In Node.js, `assignment2.js` and `capstoneproject.js` use default values ($100 bill at 15% tip, and "Monitor" at $150).

### Option 2: Browser (real `prompt()` dialogs)

1. Create an `index.html` file in the same folder:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Open the console (F12) to see the output</h1>
  <script src="capstoneproject.js"></script>
</body>
</html>
```

2. Open `index.html` in a browser.
3. Press `F12` and open the **Console** tab to see the output.

## Concepts Covered

- `var`, `let`, `const` and data types
- Arithmetic and assignment operators, type conversion
- `if...else`, `switch`, ternary operator
- `for`, `while`, `do...while`, `break`, `continue`
- Standard functions, arrow functions, default parameters
- Block scope and function scope
- Array and object manipulation with `forEach()`, `filter()`, `map()`

## Author

**Sarthak Garg**
GitHub: [Sarthak Garg](https://github.com/sarthakgarg36)