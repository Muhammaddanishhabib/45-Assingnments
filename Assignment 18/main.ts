// Assingnment 18

//  Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

let placetovisit:string[]=["paris","new york","rome", "italy","china"]

// • Print your array in its original order.

console.log("Original Order:" ,placetovisit);

// • Print your array in alphabetical order without modifying the actual list.

console.log("Alphabatical Order:" , placetovisit.slice().sort());


// • Show that your array is still in its original order by printing it.

console.log("Original Order:" ,placetovisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.


console.log("Reverse order:", placetovisit.slice().sort().reverse());


// • Show that your array is still in its original order by printing it again.

console.log("Original Order:" ,placetovisit);

// • Reverse the order of your list. Print the array to show that its
// order has changed.

console.log("Reverse order changed");
placetovisit.reverse();
console.log(placetovisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original order:", placetovisit.sort());
console.log(placetovisit);

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show
//  that its order has changed.

console.log("Reverse alphabetical changed:",  placetovisit.sort().reverse());
console.log(placetovisit);
