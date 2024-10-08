"use strict";
let guestList = ["Abu bakar", "hamza", "Talha"];
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
const guestUnableToAttend = "Mahboob ali";
console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);
const newGuest = "fahad";
guestList = guestList.map(guest => guest === guestUnableToAttend ? newGuest : guest);
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner .`);
});
console.log("\nGood news! We found a bigger dinner table, so now we can invite more guests!\n");
guestList.unshift("Mazhar ali");
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Adil khan");
guestList.push("Ali");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
