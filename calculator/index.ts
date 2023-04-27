import { question } from "readline-sync";

function main(): void {
  const firstNum: number = parseInt(question("enter your first number: "));
  const operator: string = question("enter your operator: ");
  const secondNum: number = parseInt(question("enter your second number: "));
  const validInput: boolean =
    isNumber(firstNum) && isOperator(operator) && isNumber(secondNum);

  let result: number = 0;
  if (validInput) {
    result = calculate(firstNum, operator, secondNum);
  } else {
    console.log("invalid inputs !");
    main();
  }

  console.log(result);
}
function isNumber(num: number): boolean {
  return !isNaN(num);
}
function isOperator(operator: string): boolean {
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
