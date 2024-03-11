// Javascript string Slice()

// Slice out a portion of a string from position 7 to position 13:
// let text = "Graphes,Mangos,Kiwi";
// let part =text.slice(7,14);
// console.log("The return of the :"+part);


// If you omit the second parameter, the method will slice out the rest of the string:

let text1 = "Papaya, Guava, Banana";
let part1 = text1.slice(7)
console.log("The result of the : " + part1);


// If a parameter is negative, the position is counted from the end of the string:

let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(-12);
console.log("The result of the :" +part2);


// This example slices out a portion of a string from position -12 to position -6:

let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(-12, -6);
console.log("The result of the :"+part3);
