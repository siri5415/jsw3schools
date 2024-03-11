//without datatypes a computer cannot safety solve this:
let  x = 16 + "Volvo";

//javascript wll treat the example above as:
let y = "16" + "Volvo";


let  X = 16 + "Volvo";
console.log("The result of the value :" + X);

let Y = "Volvo" + 16;
console.log("The result of the value :" +Y);


// JavaScript evaluates expressions from left to right.
let z = 16 + 4 + "Volvo";
console.log("The result of the value :" +z);

let Z = "Volvo" + 16 + 4;
console.log("The result of the value :" + Z);