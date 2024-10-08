// 45). Cars: Write a function that stores information about a car in a Object. The function should always receive a
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
// function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly


// Function to store information about a car
function build_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: { manufacturer: string; model: string; [key: string]: any } = {
        manufacturer,
        model,
    };

    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required and optional information
let myCar = build_car("Toyota", "Camry", ["color", "blue"], ["year", 2024], ["sunroof", true]);


console.log(myCar);
