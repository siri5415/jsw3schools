// JavaScript String charAt():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// The charAt() method returns the character at a specified index (position) in a string:

let text = "HELLO WORLD";
let char = text.charAt(10);
console.log("The result of the :"+text.charAt(10));


// JavaScript String charCodeAt()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The method returns a UTF-16 code (an integer between 0 and 65535).

let text1 = "Sirisha";
let char1 = text.charCodeAt(6);
console.log("The result of the :"+text1.charCodeAt(6));


// JavaScript String at():
// ~~~~~~~~~~~~~~~~~~~~~~~
// ES2022 introduced the string method at():


// Get the third letter of name:
const name = "Nava9roja";
let letter = name.at(5);
console.log("The result of the :"+letter);


// Get the third letter of name:
const name1 = "Siri2sha";
let letter1 = name.at[2];
console.log("The result of the :"+letter);

// Property Access [ ]
let text2 = "HELLO WORLD";
let char2 = text[10];
console.log("The result of the :"+text[10]);

// Gives no error, but does not work
let text3 = "HELLO WORLD";
text[0] = "A";   
console.log("The result of the :"+text);
