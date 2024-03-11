// The toString() Method:
// ~~~~~~~~~~~~~~~~~~~~~~
// The toString() method returns a number as a string.

let x = 123;
x.toString();
(123).toString();
(100+23).toString();
console.log("The result of the :" + x.toString() + " " + (123).toString() + " " + (100+23).toString());

// The toExponential() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// toExponential() returns a string, with a number rounded and written using exponential notation.

let x0 = 9.656;
x0.toExponential(2);
x0.toExponential(4);
x0.toExponential(6);
console.log("The result of the :" + x0.toExponential(2) + " " + x0.toExponential(4) + " " + x0.toExponential(6));

// The toFixed() Method:
// ~~~~~~~~~~~~~~~~~~~~~~
// toFixed() returns a string, with the number written with a specified number of decimals:

let x1 = 9.656;
x1.toFixed(0);
x1.toFixed(2);
x1.toFixed(4);
x1.toFixed(6);
console.log("The result of the :" + x1.toFixed(0) +" " + x1.toFixed(2) + " " + x1.toFixed(4) + " " + x1.toFixed(6));


// The toPrecision() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// toPrecision() returns a string, with a number written with a specified length:
let x2 = 9.656;
x2.toPrecision();
x2.toPrecision(2);
x2.toPrecision(4);
x2.toPrecision(6);
console.log("The result of the :" +x2.toPrecision() + " "+ x2.toPrecision(2) +" " + x2.toPrecision(4)+ " " +x2.toPrecision(6));


// The valueOf() Method:
// ~~~~~~~~~~~~~~~~~~~~~
// valueOf() returns a number as a number.
let x3 = 123;
x3.valueOf();
(123).valueOf();
(100+23).valueOf();
console.log("The result of the :" + x3.valueOf() +" " + (123).valueOf() + " " + (100 + 23).valueOf());


// The Number() Method:
// ~~~~~~~~~~~~~~~~~~~~
// The Number() method can be used to convert JavaScript variables to numbers:

console.log(
  "The result of the :" +
    Number(true) +
    " " +
    Number(false) +
    " " +
    Number("10") +
    " " +
    Number("  10") +
    " " +
    Number("10 ") +
    " " +
    Number("10.33") +
    " " +
    Number("10,33") +
    " " +
    Number("10 33") +
    " " +
    Number("Siri")
);


// The Number() Method Used on Dates:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Number() can also convert a date to a number.

let x4 = new Date("2024-02-08");
console.log("The result of the :"+Number(x4));

// The number of milliseconds between 2024-02-08 and 2024-02-08 is 86400000:
let x5 = new Date("2023-01-05")
console.log("The result of the :" + Number(x5));

// The parseInt() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(
  "The result of the :" +
    parseInt("-10") +
    " " +
    parseInt("-10.33") +
    " " +
    parseInt("10") +
    " " +
    parseInt("10.33") +
    " " +
    parseInt("10.6") +
    " " +
    parseInt("10 years") +
    " " +
    parseInt("years 10")
);

// The parseFloat() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log(
  "The result of the :" +
    parseFloat("10 6") +
    " " +
    parseFloat("10") +
    " " +
    parseFloat("10.33") +
    " " +
    parseFloat("10 years") +
    " " +
    parseFloat("years 10")
);


// The Number.isInteger() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The Number.isInteger() method returns true if the argument is an integer.
console.log("The result of the :" + Number.isInteger(10) +" "+Number.isInteger(10.5));

// The Number.isSafeInteger() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

console.log("The result of the :" + Number.isSafeInteger(10) + " "+ Number.isSafeInteger(12345678901234567890));



// The Number.parseFloat() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Number.parseFloat() parses a string and returns a number.

// Spaces are allowed. Only the first number is returned:
console.log("The result of the :" +
Number.parseFloat("10")+ " "+
Number.parseFloat("10.33")+" "+
Number.parseFloat("10 20 30")+" "+Number.parseFloat("10 years")+" "+Number.parseFloat("years 10"));

// The Number.parseInt() Method:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Number.parseInt() parses a string and returns a whole number.

// Spaces are allowed. Only the first number is returned:
console.log("The result of the :"+
Number.parseInt("-10")+" "+
Number.parseInt("-10.33")+" "+
Number.parseInt("10")+" "+
Number.parseInt("10.33")+" "+
Number.parseInt("10 20 30")+" "+Number.parseInt("10 years")+" "+ Number.parseInt("years 10"));
