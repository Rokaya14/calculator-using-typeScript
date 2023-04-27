"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstNum = parseInt((0, readline_sync_1.question)("enter your first number: "));
    var operator = (0, readline_sync_1.question)("enter your operator: ");
    var secondNum = parseInt((0, readline_sync_1.question)("enter your second number: "));
    var validInput = isNumber(firstNum) && isOperator(operator) && isNumber(secondNum);
    var result = 0;
    if (validInput) {
        result = calculate(firstNum, operator, secondNum);
    }
    else {
        console.log("invalid inputs !");
        main();
    }
    console.log(result);
}
function isNumber(num) {
    return !isNaN(num);
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
main();
