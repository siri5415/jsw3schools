const person = {
    firstName : "Lakshmi",
    lastName : "Karnam",
    id : "896",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log("The result of the :" +person.firstName);