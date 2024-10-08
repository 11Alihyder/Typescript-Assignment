//Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.
// Array of magician names
var magicians = ["David", "Hyder", "Talha"];
// Function to show names of magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Call the function to show magicians
show_magicians(magicians);
