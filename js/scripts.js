// Business Logic
function add(num1, num2) {
  return num1 + num2;
}

// User logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));
