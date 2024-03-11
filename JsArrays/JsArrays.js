// JavaScript Arrays:
// ~~~~~~~~~~~~~~~~~~
// An array is a special variable, which can hold more than one value:

const names = ["Sirisha","NavaRoja","Lakshmi"];
console.log("The result of the :" + names);

const cars = ["Saab", "Volvo", "BMW"];
console.log("The result of the :" + cars);

// Spaces and line breaks are not important. A declaration can span multiple lines:
const names1 = [
    "Sirisha",
    "Navaroja",
    "Lakshmi"
];
console.log("The result of the :"+names1);

// You can also create an array, and then provide the elements:
const names2 = [];
names2[0] = "Sirisha";
names2[1] = "Navaroja";
names2[2] = "Lakshmi";
console.log("The result of the :" +names2);


// Using the JavaScript Keyword new:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The following example also creates an Array, and assigns values to it:

const cars1 = new Array("Saab","Volvo","BMW");
console.log("The result of the :" + cars1);


// Accessing Array Elements:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// You access an array element by referring to the index number:

const fruits = ["Mango","Orange","Papayi"];
let fruit = fruits[0]
console.log("The result of the :" +fruits[0]);


// Changing an Array Element:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This statement changes the value of the first element in cars:

const cars2 = ["Saab","Volvo","BMW"];
cars[0] = "Opel";
console.log("The result of the :" + cars);

// Converting an Array to a String:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruit1 = ["Banana","Orange","Mango","Papayi"];
console.log("The results of the :" + fruit1);

// Access the Full Array:
// ~~~~~~~~~~~~~~~~~~~~~~~
// With JavaScript, the full array can be accessed by referring to the array name:
const cars3 = ["Saab","Volvo","BMW"];
console.log("The result of the :"+ cars3);


// Arrays are Objects:
// ~~~~~~~~~~~~~~~~~~~~
const person = ["Sirisha","NavaRoja","46"];
console.log("The result of the :" + person[0]);

// Objects use names to access its "members". In this example, person.firstName returns John:
const person1 = {firstName:"Sirisha",lastName:"Ardhala",age:"23"};
console.log("The result of the :" + person1.firstName);



// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;


// Array Properties and Methods:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The real strength of JavaScript arrays are the built-in array properties and methods:

cars.length //Returns the number of elements
cars.sort() //Sorts the arrays



// The length Property:
// ~~~~~~~~~~~~~~~~~~~~~
// The length property of an array returns the length of an array (the number of array elements).
const fruit3 = ["Banana","Orange","Apples","Papayi"];
let size = fruit3.length;
console.log("The result of the :" +size);

// Accessing the First Array Element:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fruits4 = ["Banana","Apples","Orange","Graphes"];
let fruit4 = fruits4[0];
console.log("The result of the :" + fruits4[0]);