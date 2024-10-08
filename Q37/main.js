//  Q37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
// love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a
// different message.
// Function to create a shirt with a given size and message, with default values
function make_shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message is: \"").concat(message, "\" "));
}
make_shirt();
make_shirt("M");
make_shirt("S", "TypeScript Rocks!");
