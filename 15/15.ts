// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest : string[] = ["Joseph", "Marie", "Nike"];
let unableToAttend = "Marie";
let newGuest = "Johnson";
guest[guest.indexOf(unableToAttend)] = newGuest;
guest.forEach(guest => {
    console.log(`please ${guest}, would you like to join for dinner`);
})