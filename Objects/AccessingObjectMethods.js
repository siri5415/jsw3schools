// You access an object method with the following syntax:
// objectName.methodName();

//Create an object :
const person = {
    firstName:"Saidabi",
    lastName:"Saida",
    id:4567,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};
console.log("The result of the :" + person.fullName());


// If you access a method without the () parentheses, it will return the function definition:

//Create an object :
const person1 = {
    firstName:"Saidabi",
    lastName:"Saida",
    id:4567,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};
console.log("The result of the :" + person1.fullName);
