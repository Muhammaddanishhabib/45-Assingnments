"use strict";
// // Assignment 16
// // More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guest_List = ['Zahid', 'Ali', 'Sheraz', 'Zubair'];
// for (let i = 0; i < guest_List.length; i++) {
//     console.log(guest_List[i] + ' would like to dinner tomarrow!');
// }
let not_present = "Sheraz";
let new_guest = "Imran Khan";
guest_List[2] = new_guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log(guest_List[i] + ' would like to dinner tomarrow!');
}
{
    console.log(`Mr. ${not_present} will not comming tomarrow dinner.`);
}
guest_List.unshift("Nawaz", "Sarfraz", "Rizwan");
for (let i = 0; i < guest_List.length; i++) {
    console.log(guest_List[i] + ' would like to dinner tomarrow , we found big table so we dicided to invited three more new guest');
}
