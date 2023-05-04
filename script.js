let num1 = "";
let num2 = "";
let operator = "";
const display = document.querySelector(".display");
let displayText = "";
const buttons = document.querySelector(".numbers");
let numButton = [];
const operatorButtons = document.querySelector(".operators");
let opButton = [];
const clearButton = document.querySelector(".clearButton");
const floatButton = document.querySelector(".floatButton");
const backButton = document.querySelector(".backSpaceButton")
for (i = 0; i < 10; i++) {
  numButton[i] = document.querySelector(".num" + i);
  numButton[i].value = i;
}

for (i = 0; i < 6; i++) {
   opButton[i] = document.querySelector(".op" + i);
}


opButton[0].value = "+";
opButton[1].value = "-";
opButton[2].value = "*";
opButton[3].value = "/";
opButton[4].value = "=";
floatButton.value = ".";

buttons.addEventListener("click", addToNum1, false);
operatorButtons.addEventListener("click", assignOperator, false);
clearButton.addEventListener("click", clear);
floatButton.addEventListener("click", addDecimalPoint1);
backButton.addEventListener("click", backSpace1);

function add(num1, num2) {
  result = +num1 + +num2;
  return result;
};

function subtract(num1, num2) {
  result = +num1 - +num2
  return result;
}

function multiply(num1, num2) {
  result = +num1 * +num2
  return result;
}

function divide(num1, num2) {
  result = +num1 / +num2
  return result;
}

function operate() {
  if (operator == "+") {
    add(num1, num2);
  } else if (operator == "-") {
    subtract(num1, num2);
  } else if (operator == "*") {
    multiply(num1, num2); 
  } else if (operator == "/") {
    divide(num1, num2);
  } else {
    return "error";
  };
  answer = result;
  clear()
  display.textContent = "" + answer;
  num1 = answer;
  displayText = "" + num1;
  answer = 0;
};


function addToNum1(evt) {
  if (typeof evt.target.value !== "string") {
    return;
  }
  num1 += evt.target.value;
  return [addToDisplay(evt.target.value), num1];
}

function assignOperator(evt) {
  if (typeof evt.target.value == "undefined") {
    return;
  } else if (evt.target.value == "=") {
    operate();
  } else {
    operator = evt.target.value;
    buttons.removeEventListener("click", addToNum1, false);
    buttons.addEventListener("click", addToNum2, false);
    operatorButtons.removeEventListener("click", assignOperator, false);
    operatorButtons.addEventListener("click", assignOperator2, false);
    floatButton.addEventListener("click", addDecimalPoint2);
    floatButton.removeEventListener("click", addDecimalPoint1);
    backButton.removeEventListener("click", backSpace1);
    backButton.addEventListener("click", backSpace2);
    return [addToDisplay(evt.target.value), operator];
  }
}

function assignOperator2(evt) {
  if (typeof evt.target.value == "undefined") {
    return;
  } else {
    operate();
    buttons.removeEventListener("click", addToNum1, false);
    buttons.addEventListener("click", addToNum2, false);
    floatButton.addEventListener("click", addDecimalPoint2);
    floatButton.removeEventListener("click", addDecimalPoint1);
    backButton.removeEventListener("click", backSpace1);
    backButton.addEventListener("click", backSpace2);
    operator = evt.target.value
    if (operator == "=") {
      operator = "";
      floatButton.removeEventListener("click", addDecimalPoint2);
      backButton.removeEventListener("click", backSpace2);
      backButton.addEventListener("click", backSpace1);
      return operator;
    }
    return [addToDisplay(evt.target.value), operator];
  } 
}

function addToNum2(evt) {
  if (typeof evt.target.value !== "string") {
    return;
  }
  console.log(evt.target.value);
  num2 += evt.target.value;
  backButton.removeEventListener("click", backSpace2);
  backButton.addEventListener("click", backSpace3);
  return [addToDisplay(evt.target.value), num2];
}

function addToDisplay(thingToAdd) {
  displayText += thingToAdd;
  display.textContent = "" + displayText;
  return displayText;
}

function clear() {
  displayText = "";
  num1 = "";
  num2 = "";
  operator = "";
  result = 0;
  buttons.removeEventListener("click", addToNum2, false);
  buttons.addEventListener("click", addToNum1, false);
  floatButton.removeEventListener("click", addDecimalPoint1);
  floatButton.removeEventListener("click", addDecimalPoint2);
  backButton.removeEventListener("click", backSpace3);
  backButton.removeEventListener("click", backSpace2);
  backButton.addEventListener("click", backSpace1);
  display.textContent = "";
  return [displayText, num1, num2, operator, result];
}

function addDecimalPoint1() {
  num1 = num1.toString();
  console.log(num1);
  if (num1.includes(".") == true) {
    floatButton.removeEventListener("click", addDecimalPoint1);
    return;
  }
  num1 += ".";
  floatButton.removeEventListener("click", addDecimalPoint1);
  return [addToDisplay("."), num1];
}

function addDecimalPoint2() {
  num2.toString();
  console.log(num2);
  if (num2.includes(".")) {
    floatButton.removeEventListener("click", addDecimalPoint2);
    return;
  }
  num2 += ".";
  floatButton.removeEventListener("click", addDecimalPoint2);
  return [addToDisplay("."), num2];
}

function backSpace1() {
  num1 = num1.toString();
  if (num1.charAt(num1.length - 1) == ".") {
    floatButton.addEventListener("click", addDecimalPoint1);
  }
  num1 = num1.substring(0, num1.length - 1);
  displayText = displayText.substring(0, displayText.length - 1);
  display.textContent = "" + displayText;
  return [num1, displayText];
}

function backSpace2() {
  operator = operator.toString();
  if (operator == "") {
    backButton.removeEventListener("click", backSpace2);
    backButton.addEventListener("click", backSpace1)
    buttons.removeEventListener("click", assignOperator, false);
    buttons.addEventListener("click", addToNum1, false);
    backSpace1();
    return;
  }
  operator = "";
  displayText = displayText.substring(0, displayText.length - 1);
  display.textContent = "" + displayText;
  return [operator, displayText];
}

function backSpace3() {
  num2 = num2.toString();
  if (num2.charAt(num2.length - 1) == ".") {
    floatButton.addEventListener("click", addDecimalPoint2);
  }
  if (num2 == "") {
    backButton.removeEventListener("click", backSpace3);
    backButton.addEventListener("click", backSpace2)
    buttons.removeEventListener("click", addToNum2, false);
    buttons.addEventListener("click", assignOperator, false);
    floatButton.removeEventListener("click", addDecimalPoint2);
    backSpace2();
    return;
  }
  num2 = num2.substring(0, num2.length - 1);
  displayText = displayText.substring(0, displayText.length - 1);
  display.textContent = "" + displayText;
  return [num2, displayText];
}