// JavaScript String toUpperCase():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text1 = "Hello world!" ;
let text2 = text1.toUpperCase();
console.log("The result of the :"+text1);

// JavaScript String toLowerCase():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text3 = "Hello world!";  // String
let text4 = text3.toLowerCase(); //text4 is text3 converted to lower
console.log("The result of the :"+text3);

// JavaScript String concat():
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text5 = "Hello";
let text6 = "World!";
let text7 = text5.concat(" ", text6);
console.log("The result of the :"+text7);

// The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ","World!");


// JavaScript String trim():
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// The trim() method removes whitespace from both sides of a string:
let text8 = "     Hello World!    ";
let text9 = text8.trim();
console.log("The result of the :" + "Length text8 = " + text8.length + " " + "Length.text9 = " + text9.length);



//javascript String trimString()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let text10 = " Hello world ";
let text11 = text.trimStart();
console.log("The result of the :" + " length text10 = " +" " + text10.length + " length text11 = " + text11.length);