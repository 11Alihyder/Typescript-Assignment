"use strict";
let guesArry = ["Abu bakar", "Hamza", "Ali", "fahad"];
console.log("I can invite only two people to dinner");
while (guesArry.length > 2) {
    let removedGuest = guesArry.pop();
    console.log(`Dear ${removedGuest}, you are not invited to dinner`);
}
guesArry.map((item) => console.log(`Dear ${item}, you are still invite to a dinner`));
