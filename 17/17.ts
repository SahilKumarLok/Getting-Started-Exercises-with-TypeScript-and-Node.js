// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("Unfortunately, I can only invite two people for dinner.");

let orginalGuest : string [] = ["Joseph", "Marie", "Nike", "Johnson", "Emile"];

while (orginalGuest.length > 2) {
    let removedGuest = orginalGuest.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
};

orginalGuest.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

orginalGuest.splice(0, orginalGuest.length);
console.log(orginalGuest);