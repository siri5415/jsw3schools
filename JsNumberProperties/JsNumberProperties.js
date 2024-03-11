// JavaScript EPSILON:
// ~~~~~~~~~~~~~~~~~~~~~
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

let x = Number.EPSILON;
console.log("The result of the :" + x);

// JavaScript MAX_VALUE:
// ~~~~~~~~~~~~~~~~~~~~~~
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

let x0 = Number.MIN_VALUE;
console.log("The result of the :" + x0);

// Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

let x1 = 6;
x1.MAX_VALUE;
console.log("The result of the :" + x1.MAX_VALUE);


// JavaScript MIN_VALUE:
// ~~~~~~~~~~~~~~~~~~~~~~~
// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

let x2 = Number.MIN_VALUE;
x2.MIN_VALUE;
console.log("The result of the :" + x2);


// JavaScript MAX_SAFE_INTEGER:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

// Number.MAX_SAFE_INTEGER is (253 - 1).

let x3 = Number.MAX_VALUE_SAFE_INTEGER;
console.log("The result of the : " + x3);


// JavaScript MIN_SAFE_INTEGER:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

let x4 = Number.MIN_SAFE_INTEGER
console.log("The result of the :"+x4);


// JavaScript POSITIVE_INFINITY:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x5 = Number.POSITIVE_INFINITY;
console.log("The result of the :" + x5);

// POSITIVE_INFINITY is returned on overflow:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x6 = 1 / 0;
console.log("The result of the :" +x6);


// JavaScript NEGATIVE_INFINITY:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x7 = Number.NEGATIVE_INFINITY;
console.log("The result of the :" + x7);

// POSITIVE_INFINITY is returned on overflow:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x8 = -1 / 0;
console.log("The result of the :" +x8);

// JavaScript NaN - Not a Number:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// NaN is a JavaScript reserved word for a number that is not a legal number.
let x9 = Number.NaN;
console.log("The result of the :" + Number.NaN);


// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x10 = 100 / "Orange"
console.log("The result of the :" + x10);


