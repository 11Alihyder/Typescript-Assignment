//Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.


// Array of magician names
let Magicians = ["David", "Hyder", "Talha"];

// Function to show names of magicians
function show_Magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}


// Call the function to show magicians
show_magicians(Magicians);


// Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified.

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}

// Function to show names of magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician names
let magicians = ["David ", "Hyder", "Talha"];

// Modify the array with "the Great" added
make_great(magicians);

// Call the function to show modified magicians
show_magicians(magicians);
