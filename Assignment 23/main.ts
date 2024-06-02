//Assignment 23
// Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car:string="Subaru";

// Test 1: Equility Comparasion (True)

console.log("Is Car == 'Subaru' ? I predict True.");
console.log( car == 'Subaru') // True



// Test 4: Strict Inequility Comparasion (False)

console.log("Is Car !== 'Subaru' ? I predict False.");
console.log( car !== 'Subaru') // False

// Test 5: less than Comparasion (False)

console.log("Is Car < 'Subaru' ? I predict False.");
console.log( car < 'Subaru') // False (lexivographic comparision)

// Test 6: Grather than Comparasion (False)

console.log("Is Car > 'Subaru' ? I predict False.");
console.log( car > 'Subaru') // False (lexivographic comparision)

// Test 7: Less than or Equal Comparasion (True)

console.log("Is Car <= 'Subaru' ? I predict True.");
console.log( car <= 'Subaru') // True

// Test 8: Grather than or Equal Comparasion (True)

console.log("Is Car >= 'Subaru' ? I predict True.");
console.log( car >= 'Subaru') // True

// Test 9: Checking Truthness (True)

console.log("Is Car? 'Subaru' ? I predict True.");
console.log(car) // True (non empty string is truthly)