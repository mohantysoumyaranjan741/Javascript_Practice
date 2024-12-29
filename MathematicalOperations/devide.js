// Function to divide two numbers
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Division by zero is not allowed.";
    }
    return num1 / num2;
}

// Example usage
let number1 = 20;
let number2 = 4;

let result = divideNumbers(number1, number2);
console.log("The quotient is: " + result);
