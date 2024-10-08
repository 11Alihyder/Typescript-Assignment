// Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
// separate array. Call show_magicians() with each array to show that you have one array of the original names and
// one array with the Great added to each magician’s name.


// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Function to show names of magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician names
let originalMagicians = ["David ", "Hyder", "Talha"];

// Create a new array with "the Great" added
let greatMagicians = make_great([...originalMagicians]);

// Show both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);


// Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should print a
// summary of the sandwich that is being ordered. Call the function three times, using a different number of
// arguments each time.

// Function to summarize the sandwich order
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
}

// Call the function with different numbers of arguments
make_sandwich("Lettuce", "Tomato", "Turkey");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
