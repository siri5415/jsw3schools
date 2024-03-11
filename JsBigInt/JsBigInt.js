// JavaScript Integer Accuracy:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let a = 999999999999999;
let a1 = 99999999999999999;
console.log("The result of the :" + a + " " + a1);



// How to Create a BigInt:
// ~~~~~~~~~~~~~~~~~~~~~~~
// To create a BigInt, append n to the end of an integer or call BigInt():

let b = 9999999999999999;
let b1 = BigInt("9999999999999999");
console.log("The result of the :" + b + " " + b1);


let c = 123456789012345678901234567890n;
let c1 = BigInt("12345678901234567890123456789");
console.log("The result of the :" + c +" "+ c1);


// BigInt: A new JavaScript Datatype:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The JavaScript typeof a BigInt is "bigint":

let d = BigInt(9999999999999);
let type = typeof d;
console.log("The result of the :"+typeof d);


// BigInt Multiplication Example:
let d0 = 951585812595158n;
let d1 = 951585812595158n;
let z = d0 * d1
console.log("The result of the :" + z);


// BigInt Decimals:
// ~~~~~~~~~~~~~~~~
// A BigInt can not have decimals.

// BigInt Division Example
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let e = 5n;
// let e0 = e/2;
//Error cannot mix BigInt and other types,use explicit concersion.

let e1 = 5n;
let e2 = Number(e1) / 2;
console.log("The result of the :" + e2);


// BigInt Hex, Octal and Binary:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BigInt can also be written in hexadecimal, octal, or binary notation:

let hex = 0x2000000000003n;
let oct = 0o40000000000000003n;
let bin = 0b1000000000000000000000000000000000000000000000000000000000011n;
console.log("The result of the :" + hex + " " + oct + " " + bin);


// Precision Curiosity:
// ~~~~~~~~~~~~~~~~~~~~
// Rounding can compromise program security:

// MAX_SAFE_INTEGER Example:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
let f = 95158581259515858 === 95158581259515858; // is true !!!
console.log("The result of the :" + f);


// MAX_SAFE_INTEGER Example:
// ~~~~~~~~~~~~~~~~~~~~~~~~~
let f0 = 995127440512345;
console.log("The result of the :" +f0);


// MIN_SAFE_INTEGER Example:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
let f1 = -628180358695158;
console.log("The result of the :" + f1);



// The Number.isInteger() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The Number.isInteger() method returns true if the argument is an integer.


// Number.isInteger(20);
// Number.isInteger(20.5);
console.log("The result of the :" + Number.isInteger(20) + " " + Number.isInteger(20.5));


// Example isSafeInteger():
Number.isSafeInteger(20);
Number.isSafeInteger(12345678901234567890);
console.log("The result of the :" + Number.isSafeInteger(20) +" "+ Number.isSafeInteger(12345678901234567890));
