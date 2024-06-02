// // Assignment 17
// . Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
// for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time
// you pop a name from your list, print a message to that person letting them know you’re sorry you
// can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still
//  invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make
//  sure you actually have an empty list at the endof your program.
var guest_List = ['Zahid', 'Ali', 'Sheraz', 'Zubair'];
// for (let i = 0; i < guest_List.length; i++) {
//     console.log(guest_List[i] + ' would like to dinner tomarrow!');
// }
var not_present = "Sheraz";
var new_guest = "Imran Khan";
guest_List[2] = new_guest;
// for( let i=0 ; i<guest_List.length;i++)
// {console.log(guest_List[i] + ' would like to dinner tomarrow!');}
{
    console.log("Mr. ".concat(not_present, " will not comming tomarrow dinner."));
}
guest_List.unshift("Nawaz", "Sarfraz", "Rizwan");
// for( let i=0 ; i<guest_List.length;i++)
// {console.log(guest_List[i] + ' would like to dinner tomarrow , we found big table so we dicided
// to invited three more new guest');}
console.log("Unofortunatery we cannot arrange big table, only two peoples allow");
while (guest_List.length > 2) {
    var remove_guest = guest_List.pop();
    console.log("Sorry Sir, ".concat(remove_guest, " you are not invited on tomarrow dinner."));
}
for (var i = 0; i < guest_List.length; i++) {
    console.log(guest_List[i] + 'you are still invited on tomarrow dinner');
}
guest_List.splice(0, 2);
console.log(guest_List);
