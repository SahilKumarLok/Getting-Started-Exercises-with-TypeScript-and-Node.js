function show_magicianes(magician: string[]) {
    magician.forEach(name => console.log(name));
}

function make_great(magician: string[]) {
    return magician.map(name => `the Great ${name}`);
}

let magician_names = ["Harry Potter", "David Copperfield", "Deimos"];
let great_magician = make_great(magician_names);

show_magicianes(great_magician);
