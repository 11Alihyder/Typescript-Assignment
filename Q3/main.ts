// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase



const name1: string = "Ali hyder";

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("Uppercase:", name1.toUpperCase());

console.log("Lowercase:", name1.toLowerCase());

console.log("Titlecase:", toTitleCase(name1));