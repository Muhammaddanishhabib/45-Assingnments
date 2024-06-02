//Assignment 15
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

let guest_List :string[] =['Zahid','Ali','Sheraz','Zubair'];

for (let i = 0; i < guest_List.length; i++) {
    console.log(guest_List[i] + ' would like to dinner tomarrow!');
}
let not_present: string ="Sheraz";
let new_guest:string ="Imran Khan";
guest_List[2]=new_guest;

for( let i=0 ; i<guest_List.length;i++)
{console.log(guest_List[i] + ' would like to dinner tomarrow!');}

{console.log(`Mr. ${not_present} will not comming tomarrow dinner.`)}