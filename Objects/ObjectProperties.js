// Object Properties:
// ~~~~~~~~~~~~~~~~~~~
// The name:values pairs in JavaScript objects are called properties:
// propery:"firstName",

//property value: "Sirisha"



// Accessing Object Properties:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can access object properties in two ways:

// ObjectName.propertyName
//objectName["propertyName"]

//create an object:
const person ={
    firstName : "Sirisha",
    lastName  :  "Ardhala",
       id     :   1234
};

//Display some data form the object:
console.log("The result of the :"+ person.firstName+" "+person.lastName);


//create an object:
const person1 ={
    firstName : "Navaroja",
    lastName  :  "Devineni",
       id     :   2345
};

//Display some data form the object:
console.log("The result of the :"+ person1["firstName"]+" "+person1["id"]);