// Because strings must be written within quotes, JavaScript will misunderstand this string:
let text = 'We are the so-called "Vikings" from the north.';

// \" inserts a double quote in a string:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text1 = "We are the so-called \"Vikings\" from the north.";
console.log("The result of the :"+ text1);


// \' inserts a single quote in a string:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text2 = 'It\'s alright.';
console.log("The result of the :"+text2);


//  \\ inserts a backslash in a string:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let text3 = "The character // is called backslash.";
console.log("The result of the :"+ text3);