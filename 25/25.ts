// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// Variant that passes the if test
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}

// Variant that fails the if test
alien_color = 'red';
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}