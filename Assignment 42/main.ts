 //Assignmet 42

// Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.




// define the function to show magicians name

function show_magicians(magicians: string[]){
    magicians.forEach(name => 
        console.log(name));
    }
    

function make_great(magicians: string[]) {
return magicians.map(name => `The Great ${name}`);
    }


// defina a array contianing magicians name
    
let magicians_names: string[] = ["Blackman Magician", "Hamoon Magician","Michel Magician"];
    
// call make_great function to modify magicians names

let great_magicians = make_great(magicians_names)


// call show magicians that show modified list

show_magicians(great_magicians)
