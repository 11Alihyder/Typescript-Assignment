// Q35  Animals: Think of at least three different animals that have a common characteristic. Store the names of these
// animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a
// statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program
// stating what these animals have in common. You could print a sentence such as Any of these animals would
// make a great pet!
// List of animals with a common characteristic (all are aquatic animals)
var aquaticAnimals = ["Dolphin", "Shark", "Whale"];
// Loop to print each animal with a statement
for (var _i = 0, aquaticAnimals_1 = aquaticAnimals; _i < aquaticAnimals_1.length; _i++) {
    var animal = aquaticAnimals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " is a fascinating marine creature."));
}
// Statement outside the loop about the common characteristic
console.log("All of these animals live in the ocean and are incredible swimmers!");
