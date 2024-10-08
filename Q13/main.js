// Step 1: Create an array to store favorite modes of transportation
var favoriteTransportations = ["Honda motorcycle", "Tesla car", "Yamaha scooter", "Ford truck"];
// Step 2: Use the array to print statements
favoriteTransportations.forEach(function (transportation) {
    console.log("I would like to own a ".concat(transportation, "."));
});
var vehicles = ["Honda motercycle", "Honda city", "Hilux", "Audi"];
vehicles.map(function (items) {
    return console.log("I would like to own a ".concat(items));
});
