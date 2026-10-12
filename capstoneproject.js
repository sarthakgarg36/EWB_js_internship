// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// Runs in the browser (real prompt() dialogs) or in Node.js (uses default values).

const ask = (message, defaultValue) =>
  typeof prompt === "function" ? prompt(message, defaultValue) : defaultValue;

// Print an array like ["a", "b"]
const formatList = (arr) => "[" + arr.map((item) => JSON.stringify(item)).join(", ") + "]";

console.log("--- Initializing Inventory System ---");

// ---------- 1. Data & Input Initialization ----------
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- 3. Loops & Flow Control (input handling) ----------
// Gives the user up to 3 attempts. `continue` retries on bad input, `break` stops on cancel.
function getValidProduct() {
  const MAX_ATTEMPTS = 3;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const rawName = ask("Enter product name:", "Monitor");
    const rawPrice = ask("Enter product price:", "150");

    if (rawName === null || rawPrice === null) {
      console.log("Input cancelled.");
      break;
    }

    const name = rawName.trim();
    const price = Number(rawPrice.replace("$", "").trim()); // explicit conversion

    // ---------- 2. Control Flow: validation with if...else ----------
    if (name === "" || rawPrice.trim() === "" || Number.isNaN(price) || price <= 0) {
      console.log(`Invalid input (attempt ${attempt}/${MAX_ATTEMPTS}). Please try again.`);
      continue;
    }
    return { name, price };
  }
  return null;
}

const newProduct = getValidProduct();

if (newProduct) {
  // Loop + break: search the inventory for a duplicate name
  let isDuplicate = false;
  for (const item of inventory) {
    if (item.name.toLowerCase() === newProduct.name.toLowerCase()) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    console.log(`"${newProduct.name}" already exists. Skipping.`);
  } else {
    inventory.push(newProduct);
    console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
  }
} else {
  console.log("No new product was added.");
}

// ---------- 2. Control Flow: category badges with switch ----------
function getCategory(price) {
  switch (true) {
    case price < 50:
      return "Budget";
    case price < 500:
      return "Standard";
    default:
      return "Premium";
  }
}

inventory.forEach((item) => {
  item.category = getCategory(item.price);
});

// ---------- 4. Functions & Scope ----------
// Regular function: total value of the inventory
function calculateTotalValue(items) {
  let total = 0; // local variable, not visible outside the function
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// Arrow function: apply optional tax % and discount (defaults leave the amount unchanged)
const applyAdjustments = (amount, taxRate = 0, discount = 0) =>
  amount + (amount * taxRate) / 100 - discount;

// ---------- 5. Array Methods & Iteration ----------
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
});

console.log("--- Financial Analytics ---");
const totalValue = applyAdjustments(calculateTotalValue(inventory));
console.log(`Total Inventory Value: $${totalValue}`);

const affordableItems = inventory
  .filter((item) => item.price < 200)
  .map((item) => item.name);
console.log(`Filtered Affordable Items (Under $200): ${formatList(affordableItems)}`);

const reportList = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${formatList(reportList)}`);