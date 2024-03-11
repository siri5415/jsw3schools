// Function to determine if a number is big
function checkNumberSize(number) {
  if (number > 1000) {
    return "This is a really big number!";
  } else if (number > 100) {
    return "This is a big number.";
  } else if (number > 10) {
    return "This is a medium-sized number.";
  } else {
    return "This is a small number.";
  }
}

// Example usage
var myNumber = 1000;
var result = checkNumberSize(myNumber);
console.log("The result of the :"+myNumber);
