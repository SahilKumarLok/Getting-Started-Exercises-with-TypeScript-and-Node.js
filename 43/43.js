"use strict";
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
function make_greats(magician) {
    return magician.map(name => `the Great ${name}`);
}
let magician_name = ["Harry Potter", "David Copperfield", "Deimos"];
let great_magicians = make_greats(magician_name);
show_magician(great_magicians);
let copy_magician_names = magician_name.slice();
let copy_great_magicians = make_greats(copy_magician_names);
show_magician(magician_name);
show_magician(copy_great_magicians);
