// Assignment 1: Variables, Data Types, and Console Operations

var userName = "Alice";                          // var  -> function-scoped, re-assignable
let age = 25;                                    // let  -> block-scoped, re-assignable
const isEmployed = true;                         // const -> block-scoped, cannot be re-assigned
const skills = ["HTML", "CSS", "JavaScript"];    // const array (contents can still change)

// Helper to print an array the way the expected output shows it
const formatArray = (arr) => "[" + arr.map((item) => `"${item}"`).join(", ") + "]";

console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${formatArray(skills)} (Type: ${typeof skills})`);