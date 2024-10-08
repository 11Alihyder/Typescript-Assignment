// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.

let guestArry:string[]=["Hamza", "Abu bakar","Fahad","Talha"]

let canNotAttend:string="talha"

let newGuest:string="Adil"

guestArry[guestArry.indexOf(canNotAttend)]=newGuest


guestArry.unshift("Ali")

let middleGuest:string=("mazhar")

let middleIndex=guestArry.length/2;
guestArry.splice(middleIndex,0,middleGuest)

guestArry.push("Hammad")

console.log(guestArry.length + " " + "people" + " " + "are invited to dinner");


