



// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.



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
    
// making a copy of original array through .slice() function


let cory_magician_names = magicians_names.slice()

// modified the copied array to include "The Great" with their names

let copy_great_magician = make_great(cory_magician_names);

// show both arrays original and copied

// original
console.log("\nOrgional Array\n");

show_magicians(magicians_names);

// copied
console.log("\nCopied Array\n");


show_magicians(copy_great_magician)