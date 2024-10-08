// Q20. Think of something you could store in a array. For example, you could make a list of mountains, rivers,
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these
// items.

let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "K2 Mountain"
];


console.log("List of famous landmarks:");
landmarks.map(landmark => {
    console.log(landmark);
});
