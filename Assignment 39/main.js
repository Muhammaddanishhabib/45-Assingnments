// Assignment 39:
// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted
//  like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the
// value that’s returned.
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
var country1 = city_country("Karachi", "Pakistan");
var country2 = city_country("Makkah", "Saudia  Arabia");
var country3 = city_country("Istanbul", "Turkey");
console.log(country1);
console.log(country2);
console.log(country3);
