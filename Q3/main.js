"use strict";
const name1 = "Ali hyder";
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("Uppercase:", name1.toUpperCase());
console.log("Lowercase:", name1.toLowerCase());
console.log("Titlecase:", toTitleCase(name1));
