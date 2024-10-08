"use strict";
let guestArry = ["Mahboob ali", "Abu bakar", "hamza", "Talha"];
console.log(guestArry);
let canNotAttend = "hamza";
console.log(`${canNotAttend} can not it, for dinner`);
let newGuest = "fahad";
guestArry[guestArry.indexOf(canNotAttend)] = newGuest;
guestArry.map((item) => console.log(`Dear ${item}, you are corodially to a dinner`));
