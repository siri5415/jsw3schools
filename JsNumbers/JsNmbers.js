// JavaScript Numbers:
// ~~~~~~~~~~~~~~~~~~~

let x = 3.14; //A number with decimals
let y = 3; //A number without decimals
console.log("The resultb of the :" + x + " " + y);

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let x1 = 123e5; //12300000
let y1 = 123e-5; //0.00123
console.log("The result of the :"+ x1 + " "+ y1);


// Integer Precision:
// ~~~~~~~~~~~~~~~~~~
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x2 = 99999999999999;// x wll be 9999999999999
let y2 = 9999999999999999;// y will be 100000000000
console.log("The result of the :" + x2 + " " + y2);


// Floating Precision:
// ~~~~~~~~~~~~~~~~~~
// Floating point arithmetic is not always 100% accurate:

let x3 = 0.2 + 0.1;
console.log("The result of the :" + x3);

// To solve the problem above, it helps to multiply and divide:

let x4 = (0.2 * 10 + 0.1 * 10) / 10;
console.log("The result of the :" + x4);

// Adding Numbers and Strings:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// If you add two numbers, the result will be a number:
let x5 = 10;
let y5 = 20;
let z= x5 + y5
console.log("The result of the :" + z);

// If you add two strings, the result will be a string concatenation:

let x6 = "10";
let y6 = "20";
let z1 = x6 + y6
console.log("The result of the :" + z1);

// If you add two strings, the result will be a string concatenation:

let x7 = 10;
let y7 = "20";
let z2 = x7 + y7
console.log("The result of the :" + z2);

// If you add a string and a number, the result will be a string concatenation:
let x8 = "10";
let y8 = 20;
let z3 = x8 + y8;
console.log("The result of the :"+ z3);

// A common mistake is to expect this result to be 30:
let x9 = 10;
let y9 = 20;
let z4 = "The result is: "+ x9 + y9;
console.log("The result of the :" + z4);

// A common mistake is to expect this result to be 102030:
let x10 = 10;
let y10 = 20;
let z5 = "30";
let result = x10 + y10 + z5;
console.log("The result of the :"+result);


// Numeric Strings:
// ~~~~~~~~~~~~~~~
// JavaScript strings can have numeric content:

let x11 = 100; // x is a number
let y11 = "100"; // y is a string 

// JavaScript will try to convert strings to numbers in all numeric operations:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x12 = "100";
let y12 = "10";
let z6 = x12 / y12;
console.log("The result of the :" + z6);


// This will also work:
let x13 = "100";
let y13 = "10";
let z7 = x13 + y13;
console.log("The result of the :" + z7);

// This will also work:
let x14 = "100";
let y14 = "10";
let z8 = x14 - y14;
console.log("The result of the :" + z8);


// This will also work:
let x15 = "100";
let y15 = "10";
let z9 = x15 + y15;
console.log("The result of the :" + z9);

