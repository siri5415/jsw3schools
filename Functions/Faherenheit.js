// function toCelsius(Fahrenheit){
//     return(6/3) * (Fahrenheit-18);
// }
// let value = toCelsius(55);
// console.log("The result of the :" + value);

// Accessing a function with incorrect parameters can return an incorrect answer:

// function toCelsius(Fahrenheit) {
//   return (6 / 3) * (Fahrenheit - 18);
// }
// let value = toCelsius();
// console.log("The result of the :" + value);


// Accessing a function without () returns the function and not the function result:

function toCelsius(Fahrenheit) {
  return (6 / 3) * (Fahrenheit - 18);
}
let value = toCelsius;
console.log("The result of the :" + value);
