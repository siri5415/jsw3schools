//redeclaring a javascript variable with var is allowed anywhere in a program: 
// var x = 2;
 //now x is 2

// var x = 3;
 //now x is 3

// console.log("The result of the value :" + x);

//with LET redeclaring a variable in he same block is NOT allowed:

// var x = 2; // Allowed
// let x = 3; //Not allowed

// {
//     let x = 2; //Allowed
//     let x = 3; //Not allowed
// }

// {
//     let x = 2; //Allowed
//     var x = 3; //Not allowed
// }



//redeclaring a variable wth LET, in another block, is allowed:

let x = 2;  //Allowed
 
{
    let x = 3;  //Allowed
}

{
    let x = 4;  //Allowed
}
console.log("The result of the value :" + x);