// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function rectangleAreaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Block scope: let/const live only inside the { } block
try {
  {
    let blockVar = "I only exist inside this block";
  }
  console.log(blockVar); // ReferenceError
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}

// Function scope: variables declared inside a function are not visible outside it
try {
  function scopeDemo() {
    var functionVar = "I only exist inside this function";
  }
  scopeDemo();
  console.log(functionVar); // ReferenceError
} catch (error) {
  console.log(`Function Scope Error: ${error.name}: ${error.message} (when accessed outside function)`);
}