"use strict";
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value;
    });
    return car;
}
let my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:True");
console.log(my_car);
