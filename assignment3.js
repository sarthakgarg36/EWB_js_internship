// Assignment 3: Conditional Logic Implementation

const score = 85;
console.log(`Score: ${score}`);

// 1) if...else -> validate the score
if (Number.isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Enter a number between 0 and 100.");
} else {
  // 2) switch -> determine the letter grade
  let grade;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // 3) ternary -> passed or failed (pass mark = 50)
  const status = score >= 50 ? "Passed" : "Failed";

  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}