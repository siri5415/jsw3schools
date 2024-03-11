// The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "Apple, Banana, Kiwi";
// let part = str.substring(7,13);
console.log("The result of the :"+str.substring(7,13));

// Js String substr():
// ~~~~~~~~~~~~~~~~~~~~~~~
// The difference is that the second parameter specifies the length of the extracted part.

let str1 = "Apple, Banana, Kiwi";
console.log("The rersult of the :"+str1.substr(7,6));


// If you omit the second parameter, substr() will slice out the rest of the string.
let str2 = "Apple, Banana, Kiwi";
console.log("The result of the :"+str2.substr(7));


// If the first parameter is negative, the position counts from the end of the string.

let str3 = "Apple,Banana, Kiwi";
console.log("The result of the :"+ str.substr(-4));



