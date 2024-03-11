// Normally, JavaScript strings are primitive values, created from literals:
let x = "Siri";

// But strings can also be defined as objects with the keyword new:
let y = new String("Siri");

//x is a string
let X = "Siri";

//y is a object
let Y = new String("Siri");
console.log("The result of the :"+typeof X +" "+typeof Y);


// When using the == operator, x and y are equal:
let a = "Siri";
let b = new String("Siri");
console.log("The result of the :"+(a==b));


// When using the === operator, x and y are not equal:
let A = "Siri";
let S = new String("Siri");
console.log("The result of the :"+(A===S));


// (x == y) true or false?
let X1 = new String("Siri");
let Y1 = new String("Siri");
console.log("The result of the :"+(X1==Y1));


// (x === y) true or false?
let X2 = new String("Siri");
let Y2 = new String("Siri");
console.log("The result of the :"+(X2===Y2));


