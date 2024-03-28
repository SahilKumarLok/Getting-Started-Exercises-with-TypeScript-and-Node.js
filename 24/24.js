"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
// Given variables
let name2 = 'John Doe';
let age = 30;
let isMarried = true;
let skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
// 1. Tests for equality and inequality with strings
console.log("Is name === 'John Doe'? I predict True.");
console.log(name2 === 'John Doe');
console.log("Is name === 'john doe'? I predict False.");
console.log(name2 === 'john doe');
console.log("Is name !== 'Jane Doe'? I predict True.");
console.log(name2 !== 'Jane Doe');
// 2. Tests using the toLowerCase function
console.log("Is name.toLowerCase() === 'john doe'? I predict True.");
console.log(name2.toLowerCase() === 'john doe');
console.log("Is name.toLowerCase() === 'JANE DOE'? I predict False.");
console.log(name2.toLowerCase() === 'JANE DOE');
// 3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age === 30? I predict True.");
console.log(age === 30);
console.log("Is age !== 35? I predict True.");
console.log(age !== 35);
console.log("Is age > 25? I predict True.");
console.log(age > 25);
console.log("Is age > 35? I predict False.");
console.log(age > 35);
console.log("Is age >= 30? I predict True.");
console.log(age >= 30);
console.log("Is age >= 35? I predict False.");
console.log(age >= 35);
console.log("Is age < 35? I predict True.");
console.log(age < 35);
console.log("Is age < 30? I predict False.");
console.log(age < 30);
console.log("Is age <= 35? I predict True.");
console.log(age <= 35);
console.log("Is age <= 30? I predict True.");
console.log(age <= 30);
console.log("Is age <= 25? I predict False.");
console.log(age <= 25);
// 4. Tests using "and" and "or" operators
console.log("Is age === 30 && isMarried === true? I predict True.");
console.log(age === 30 && isMarried === true);
console.log("Is age === 25 && isMarried === true? I predict False.");
console.log(age === 25 && isMarried === true);
console.log("Is age === 30 || isMarried === true? I predict True.");
console.log(age === 30 || isMarried === true);
console.log("Is age === 25 || isMarried === true? I predict True.");
console.log(age === 25 || isMarried === true);
// 5. Test whether an item is in an array
console.log("Is 'HTML' in skills? I predict True.");
console.log(skills.includes('HTML'));
console.log("Is 'CSS' in skills? I predict True.");
console.log(skills.includes('CSS'));
console.log("Is 'Python' in skills? I predict False.");
console.log(skills.includes('Python'));
// 6. Test whether an item is not in an array
console.log("Is 'Python' not in skills? I predict True.");
console.log(!skills.includes('Python'));
console.log("Is 'HTML' not in skills? I predict False.");
console.log(!skills.includes('HTML'));
