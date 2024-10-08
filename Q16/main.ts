// Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
// Print a new set of invitation messages, one for each person in your list.


let guestList: string[] = ["Abu bakar", "hamza", "Talha"];


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
