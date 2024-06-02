// Assignment 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False 
//result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than 
// or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car : string = "subaru";
let age : number = 25;
let numbers: number[] = [1, 2, 3, 4]

// String Test

// Test 1:  Equility (True)

console.log("Is car == 'subaru'? I pridict True");
console.log(car == 'subaru'); // True (case insencitive)

// Test 2: Strict Equality (false)

console.log("Is car === 'subaru'? I pridict False");
console.log(car === 'subaru'); // False (case insencitive)


// Test 3: inequality (true)

console.log("Is car != 'Toyota'? I pridict True.");
console.log(car != 'Toyota'); // True 

// Test 4: inequality (False)

console.log("Is car !== 'subaru'? I pridict false.");
console.log(car !== 'subaru'); // False (case sencitive)

// Lower case function Tests

// Test: 5 Lower Case Conversion (True)

console.log("Is car.toLowerCase() == 'subaru'? I pridict True.");
console.log(car.toLowerCase() == 'subaru'); // true (converted to lowerCase)

// Test: 6 Lower Case Conversion (False)

console.log("Is car === car.toLowerCase()?'subaru'? I pridict False.");

console.log(car === car.toLowerCase()); // false ( Original value remain uppercase)

// Test: 7 Equility (True)

console.log("Is car == 25? I predict True.");

console.log(age == 25 ); // True

// Test: 8 Inequility (False)

console.log("Is car != 30? I predict False.");

console.log(age != 30 ); // True

// Test: 9 Greater than (False)

console.log("Is car > 30? I predict False.");

console.log(age > 30 ); // False

// Test: 10 less than or equal (True)

console.log("Is age <= 25? I predict True.");

console.log(age <= 25 ); // True

// Logical Operator

// Test: 11 AND (True)

console.log("Is age > 20 && age <30 ? I predict True.");

console.log( age > 20 && age <30); // True (Both Conditions are Met)

// Test: 12 OR (False)

console.log("Is age > 30 || age < 18 ? I predict False.");

console.log( age > 30 || age < 18); // False (Neither Conditions are Met)

// Array Test

// Test: 14. Not in Array (False)

console.log("Is 5 not in numbers ? I predict False.");

console.log( 5 not in numbers); // True (negation of in  operator)









