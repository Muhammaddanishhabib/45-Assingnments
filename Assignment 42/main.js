//Assignmet 42
// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) {
        return console.log(name);
    });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// defina a array contianing magicians name
var magicians_names = ["Blackman Magician", "Hamoon Magician", "Michel Magician"];
// call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
// call show magicians that show modified list
show_magicians(great_magicians);
