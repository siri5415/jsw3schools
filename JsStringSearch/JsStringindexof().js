// JavaScript String indexOf()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate") ;
console.log("The result of the :" + index);

// JavaScript String lastIndexOf():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text0 = "Please locate where 'locate' occurs!";
let index0 = text.lastIndexOf("locate");
console.log("The result of the :" + index0);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text1 = "Please locate where 'locate' occurs! ";
let index1 = text.lastIndexOf("Siri");
console.log("The result of the :" + index1);

// Both methods accept a second parameter as the starting position for the search:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text2 = "Please locate where 'locate' occurs! ";
let index2 = text.indexOf("locate",10);
console.log("The result of the :" + index2);

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text3 = "please locate where 'locate' occurs!";
let index3 = text.lastIndexOf("locate",15);
console.log("The result of the :" + index3);

// JavaScript String search():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text4 = "Please locate where 'locate' occurs !"
let index4 = text.search("locate");
console.log("The result of the :" + index4);

let text5 = "Please locate where 'locate' occurs !";
let index5 = text.search(/locate/);
console.log("The result of the :" + index5);

// JavaScript String match():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Perform a search for "ain":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text6 = "The rain in SPAIN stays mainly in the plain";
const myArr = text6.match("ain");
console.log("The result of the :" + myArr.length + " " + myArr);

// Perform a search for "ain":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text7 = "The rain in SPAIN stays mainly in the plain";
const myArr1 = text7.match(/ain/);
console.log("The result of the :" + myArr1.length + " " + myArr1);

// Perform a global search for "ain":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text8 = "The rain in SPAIN stays mainy in the plain";
const myArr2 = text8.match(/ain/g);
console.log("The result of the :" + myArr2.length + " " + myArr2);

// Perform a global, case-insensitive search for "ain":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text9 = "The rain in SPAIN stays mainy in the plain";
const myArr3 = text9.match(/ain/gi);
console.log("The result of the :" + myArr3.length + " " + myArr3);


// JavaScript String matchAll():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text10 = "I love Cats. Cats are very easy to love. Cats are very popular."
const iterator = text10.matchAll("Cats");
console.log("The result of the :" + Array.from(iterator));

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text11 = "I love Cats. Cats are very easy to love. Cats are very popular.";
const iterator1 = text11.matchAll(/Cats/g);
console.log("The result of the :" + Array.from(iterator1));

// If you want to search case insensitive, the insensitive flag (i) must be set:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text12 = "I love Cats. Cats are very easy to love. Cats are very popular.";
const iterator2 = text12.matchAll(/Cats/gi);
console.log("The result of the :" + Array.from(iterator2));


// JavaScript String includes():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The includes() method returns true if a string contains a specified value.

// Otherwise it returns false.

// Check if a string includes "world":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text13 = "Hello world,welcome to the universe.";
console.log("The result of the :" + text13.includes("world"));

// Check if a string includes "world". Start at position 12:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text14 = "Hello world,welcome to the universe.";
console.log("The result of the :" + text14.includes("world",12));


// JavaScript String startsWith():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The startsWith() method returns true if a string begins with a specified value.

// Otherwise it returns false:

let text15 = "Hello world,welcome to the universe";
console.log("The result of the : " + text15.startsWith("Hello"));

let text16 = "Hello world,welcome to the universe";
console.log("The result of the : " + text16.startsWith("World"));


// A start position for the search can be specified:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text17 = "Hello world,welcome to the universe";
console.log("The result of the : " + text17.startsWith("world",5));

let text18 = "Hello world,welcome to the universe";
console.log("The result of the :"+ text18.startsWith("world",6));

// JavaScript String endsWith():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The endsWith() method returns true if a string ends with a specified value.

// Otherwise it returns false:

// Check if a string ends with "Roja":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text19 = "Nava Roja";
text19.endsWith("Roja");
console.log("The result of the :" + text19.endsWith("Roja"));


// Check if the 11 first characters of a string ends with "world":
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text20 = "Hello world,welcome to the universe.";
text20.endsWith("world",11);
console.log("The result of the :" +text20.endsWith("world",11));
