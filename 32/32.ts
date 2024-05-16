// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    let our_condition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase()); 
    if (our_condition) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});