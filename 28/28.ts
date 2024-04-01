// Stages of Life: Write an if-else chain that determines a person’s stage of life

let aGe: number = 25;

if (aGe < 2) {
    console.log("The person is a baby.");
} else if (aGe < 4) {
    console.log("The person is a toddler.");
} else if (aGe < 13) {
    console.log("The person is a kid.");
} else if (aGe < 20) {
    console.log("The person is a teenager.");
} else if (aGe < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}