// NaN - Not a Number:
// ~~~~~~~~~~~~~~~~~~~
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
 
let x = 100/"Apple";
console.log("The result of the :" + x);


// However, if the string is numeric, the result will be a number:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x0 = 100/"10";
console.log("The result of the :" + x0);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x1 = 100 / "Apple";
isNaN(x1);
console.log("The result of the :" + isNaN(x1));

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x2 = NaN;
let y2 = 5;
let z = x2 + y2;
console.log("The result of the :"+z); 

// Or the result might be a concatenation like NaN5:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x3 = NaN;
let y3 = "5";
// let z1 = x3 + y3;
console.log("The result of the :" + x3 + y3);

// NaN is a number: typeof NaN returns number:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x4 = NaN;
console.log("The result of the :"+typeof x4);



// Infinity:
// ~~~~~~~~~
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNumber = 2;
let txt = " ";
//Execute until Infinity
while (myNumber != Infinity){
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + " ";
}
console.log("The result of the :" + txt);

// Division by 0 (zero) also generates Infinity:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x5 = 2 / 0;
let y5 = -2 / 0;
console.log("The result of the :" + x5 + y5);

// Infinity is a number: typeof Infinity returns number.
console.log("The result of the :" + typeof Infinity);

// Hexadecimal:
// ~~~~~~~~~~~~
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let x6 = 0XFF;
console.log("The result of the :" + "0XFF = " + x6);


// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let myNumber1 = 32;
console.log("The result of the :" + "Decimal 32 = " + " " +" ");
"Hexatrigesimal (base 36): " +
  myNumber.toString(36) +
  " " +
  "Duotrigesimal (base 32): " +
  myNumber.toString(32) +
  " " +
  "Hexadecimal (base 16): " +
  myNumber.toString(16) +
  " " +
  "Duodecimal (base 12): " +
  myNumber.toString(12) +
  " " +
  "Decimal (base 10): " +
  myNumber.toString(10) +
  " " +
  "Octal (base 8): " +
  myNumber.toString(8) +
  " " +
  "Binary (base 2): " +
  myNumber.toString(2);


//   JavaScript Numbers as Objects:
//   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Normally JavaScript numbers are primitive values created from literals:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x7 = 123;

// But numbers can also be defined as objects with the keyword new:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let y6 = new Number(123);

// x is a number
let x8 = 123;
//y is a object
let y7 = new Number(123);
console.log("The result of the :" + typeof x8 + " "+ typeof y7);


// When using the == operator, x and y are equal:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let x9 = 500;
let y8 = new Number(500);
console.log("The result of the :" +(x9 == y8));


// When using the === operator, x and y are not equal.
let x10 = 500;
let y9 = new Number(500);
console.log("The result of the :" + (x10 === y9));


// (x == y) true or false?

let x11 = new Number(500);
let y10 = new Number(500);
console.log("The result of the :" + (x11 == y10));


// (x === y) true or false?

let x12 = new Number(500);
let y11 = new Number(500);
console.log("The result of the :" + (x12 === y11));
