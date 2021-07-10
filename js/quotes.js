quotes = [
    {
        quote: "You can't go back and change the beginning, but you can start where you are and change the ending.",
        author: "C.S. Lewis",
    },
    {
        quote: "He that would live in peace & at ease, Must not speak all he knows or judge all he sees.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    },
    {
        quote: "Anyone who lives within their means suffers from a lack of imagination.",
        author: "Oscar Wilde",
    },
    {
        quote: "The best advice I've ever received: 'no one else knows what they are doing either.'",
        author: "Charles Bukowski",
    },
    {
        quote: "90% of what you are stressing over today won't even be relevant in a year. Breathe easy.",
        author: "Wesley Snipes",
    },
    {
        quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
        author: "J.K. Rowling",
    },
    {
        quote: "The beautiful thing about learning is nobody can take it from you.",
        author: "B.B. King",
    },
    {
        quote: "The first principle is that you must not fool yourself and you are the easiest person to fool.",
        author: "Richard P. Feynman",
    },
    {
        quote: "I thought one should have the attitude of 'What do you care what other people think!'",
        author: "Richard P. Feynman",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;
