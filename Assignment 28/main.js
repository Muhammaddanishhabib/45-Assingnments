// Assignment 28.
// Stages of Life: Write an if-else chain that determines 
// A person’s stage of life. Set a value for the variable age, and then:
var age = 15;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person
// is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person
//is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a Kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person
//is a teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is a Teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person 
//is an adult.
else if (age >= 20 && age < 65) {
    console.log("the person is a Adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("the person is an elder.");
}
