// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// write your book 
let book: { title: string; author: string; yearPublished: number } = {
    title: "Attitude is Everything",
    author: "Jeff Keller",
    yearPublished: 1999,
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);