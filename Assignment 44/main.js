"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
//  Define a function with a rest parameter 
function makeSandwich(...items) {
    console.log(("\nMaking a Sandwich with the following items:\n"));
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\n Now Enjoy Sandwich");
}
// call the function 3 times with different 2 numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Garlic");
makeSandwich("Bread", "Butter");
makeSandwich("Red chilli", "Cheese", "Mayo", "Garlic", "Bread", "Butter");
