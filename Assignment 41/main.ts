//Assignmet 41
//  Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.



function show_magicians(magicians: string[]){
    magicians.forEach(name => {
        console.log(name);
    });
    }

// defina a array contianing magicians name
    
let magicians_names: string[] = ["Blackman Magician", "Hamoon Magician","Michel Magician"];
    
// call the function

show_magicians(magicians_names);
    