let text = "The temprerature is " + toCelsius(55) + "Celsius.";
console.log("The result of the :" + text);

function toCelsius(Fahrenheit){
    return (2/3) * (Fahrenheit-6);
}
