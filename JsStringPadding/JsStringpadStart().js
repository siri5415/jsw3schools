// JavaScript String padStart()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pad a string with "0" until it reaches the length 4:
let text = "5";
// let padded = text.padStart(4,"0");
console.log("The result of the :" + text.padStart(4,"0"));


// Pad a string with "x" until it reaches the length 4:
let text1 = "5";
// let padded1 = text1.padStart(4,"x")
console.log("The result of the :" + text1.padStart(4,"x"));


let numb = 5;
let text2 = numb.toString();
// let padded = text2.padStart(4, "0");
console.log("The result of the :" + text2.padStart(4,0));


// JavaScript String padEnd()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text3 = "5";
// let padded = text3.padEnd(4, "0");
console.log("The result of the :" + text3.padEnd(4,"0"));


let text4 = "5";
// let padded = text3.padEnd(4, "x");
console.log("The result of the :" + text4.padEnd(4, "x"));


let numb1 = "5";
let text5 = numb1.toString();
let padded = text.padEnd(4,"0")
console.log("The result of the :" + text3.padEnd(4, "0"));

// padEnd() is not supported in Internet Explorer.

// JavaScript String repeat()
// The repeat() method returns a new string.

let text6 = "Hello world!";
let result = text6.repeat(2);
console.log(result);

let text7 = "Hello world!";
let result1 = text7.repeat(4);
console.log(result1);


// Replacing String Content
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text8 = "Please visit Google!";
let newText1 = text8.replace("Google","Javascript.info");
console.log("The result of the :" + text8.replace("Google","Javascript.info"));


// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let text9 = "please visit Microsoft!";
let newText2 = text9.replace("MICROSOFT","W3schools")
console.log("The reslt of the :" + text9.replace("MICROSOFT","W3schools"));

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let text10 = "Please visit Microsoft Edge!";
let newText3 = text10.replace("/Microsoft Edge/i", "Javascript.info");
console.log("The result of the :"+ text10.replace("/Microsoft Edge/i","Javascript.info"));

// To replace all matches, use a regular expression with a /g flag (global match):
let text11 = "Please visit Microsoft Edge and Microsoft Edge!";
let newText4 = text11.replace(/Microsoft Edge/g, "Javascript.info");
console.log(
  "The result of the :" + text11.replace(/Microsoft Edge/g, "Javascript.info")
);


// JavaScript String ReplaceAll():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text0 = "I love cats. Caats are very easy to love. Cats are very popular";
text1 = text1.replaceAll("Cats","Dots");
text2 = text2 .replaceAll("cats","dogs")
console.log("The result of the :" + text0);

let text12 = "I love cats. Caats are very easy to love. Cats are very popular";
text2 = text2.replaceAll("/Cats/g", "Dots");
text3 = text3.replaceAll("/cats/g", "dogs");
console.log("The result of the :" + text12);



// Converting a String to an Array:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// JavaScript String split()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// text.split(",")//split on commas
// text.split(" ")//split on spaces
// text.split("|")//split on pipe



let text13 = "Hello";
const myArray = text.split(" ");
text = "Hello ";
for(let i=0 ; i < myArray.length; i++){
    text +=  myArray[i] + " "
}
console.log("The result of the :" +text);