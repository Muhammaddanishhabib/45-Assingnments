// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


// definee a function to create car object weth optional parameter....


function create_car(manufacturer,model,...options) {
    let car = {
        manufacturer: manufacturer,
        model: model

    };
// Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":")
        car[key.trim()] =value.trim();
    });
    return car;
}
// call the function to create a car obj

let my_car = create_car("Toyota","Corolla","color: Black","Bullet Proof : true","year: 2024")

console.log(my_car);
