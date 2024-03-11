let text = "Outside: " + typeof personName;
console.log("The result of the :" + text);
// code here can NOT use  personName
function LocalVariables(){
    let personName = "Sirisha";
let text = "Inside: " + typeof personName + " " + personName;
console.log("The result of the :" + text);
    //code here can use personName
}
LocalVariables();
//code here can Not use personName