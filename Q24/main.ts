 // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less
// than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// Tests for Equality and Inequality with Strings
let string1 = "Hello";
let string2 = "Hello";
console.log(string1 === string2);  // True

string1 = "Hello";
string2 = "hello";
console.log(string1 === string2);  // False

// Tests Using the Lowercase Function
let original = "TypeScript";
let lowercased = original.toLowerCase();
console.log(lowercased === "typescript");  // True

original = "TypeScript";
lowercased = original.toLowerCase();
console.log(lowercased === "TypeScript");  // False

// Numerical Tests
let num1 = 10;
let num2 = 10;
console.log(num1 === num2);  // True

num1 = 10;
num2 = 5;
console.log(num1 === num2);  // False

num1 = 15;
num2 = 10;
console.log(num1 > num2);  // True

num1 = 5;
num2 = 10;
console.log(num1 > num2);  // False

num1 = 20;
num2 = 20;
console.log(num1 >= num2);  // True

num1 = 20;
num2 = 30;
console.log(num1 >= num2);  // False

// Tests Using "And" and "Or" Operators
let age = 25;
let experience = 5;
console.log(age > 20 && experience > 3);  // True

age = 25;
experience = 1;
console.log(age > 20 && experience > 3);  // False

age = 18;
experience = 1;
console.log(age > 20 || experience > 3);  // False

age = 18;
experience = 1;
console.log(age > 20 || experience > 3);  // False

// Test Whether an Item Is in an Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana"));  // True

console.log(fruits.includes("grape"));  // False

// Test Whether an Item Is Not in an Array
console.log(!fruits.includes("grape"));  // True

console.log(!fruits.includes("banana"));  // False
