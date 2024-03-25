"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guests = ["Joseph", "Marie", "Nike"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("jake");
guests.splice(guests.length / 2, 0, "Emile");
guests.push("Johnson");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
