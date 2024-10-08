// Q35  Animals: Think of at least three different animals that have a common characteristic. Store the names of these
// animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a
// statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program
// stating what these animals have in common. You could print a sentence such as Any of these animals would
// make a great pet!



// List of animals with a common characteristic (all are aquatic animals)
let aquaticAnimals = ["Dolphin", "Shark", "Whale"];

// Loop to print each animal with a statement
for (let animal of aquaticAnimals) {
    console.log(`A ${animal.toLowerCase()} is a fascinating marine creature.`);
}

// Statement outside the loop about the common characteristic
console.log("All of these animals live in the ocean and are incredible swimmers!");

// Q36  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message
// printed on it. Call the function.



function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message is: "${message}" `);
}

make_shirt("M", " TypeScript is grat!");
