// Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
// separate array. Call show_magicians() with each array to show that you have one array of the original names and
// one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Function to show names of magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Array of magician names
var originalMagicians = ["David ", "Hyder", "Talha"];
// Create a new array with "the Great" added
var greatMagicians = make_great(__spreadArray([], originalMagicians, true));
// Show both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
