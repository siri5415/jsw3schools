// Back-Tics Syntax:
// ~~~~~~~~~~~~~~~~~~~~
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

let text = `Hello world!`;
console.log("The result of the :"+ text);

// Quotes Inside Strings:
// ~~~~~~~~~~~~~~~~~~~~~~~
// Template Strings allow both single and double quotes inside a string:
let text0 =`She's often called "Lakshmi"`;
console.log("The result of the :"+text0);


// Multiline Strings:
// ~~~~~~~~~~~~~~~~~~~~
// Template Strings allow multiline strings:
let text1 = 
`The quick
brown fox
jumps over
the lazy dog`
console.log("The result of the :"+text1);


// Interpolation;

// The method is called string interpolation.

// The syntax is:
// ~~~~~~~~~~~~~~~~
// ${...}


// Variable Substitutions:
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// Template Strings allow variables in strings:

let firstName = "Siri";
let lastName = "Sirisha";
let text2 = `welcome ${firstName},${lastName}!`;
console.log("The result of the :"+ text2);


// Expression Substitution:
// ~~~~~~~~~~~~~~~~~~~~~~~~
// Template Strings allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total : ${(price * (1 + VAT)).toFixed(2)}`;
console.log("The result of the :"+total);


// HTML Templates:
// ~~~~~~~~~~~~~~~~~~~
let header = "Template Strings";
let tags = ["templates strings","Javascript","ES6"];
 
let html = `<h2>${header}</h2><ul>`;
for (const X of tags) {
    html += `<li>${X}</li>`;
} 
html += `</ul>`
console.log("The result of the :" + tags);