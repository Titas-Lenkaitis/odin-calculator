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


buttons.addEventListener("click", addToNum1, false);
operatorButtons.addEventListener("click", assignOperator, false);
clearButton.addEventListener("click", clear);


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
  console.log(evt.target.value);
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
    return [addToDisplay(evt.target.value), operator];
  }
}

function addToNum2(evt) {
  if (typeof evt.target.value !== "string") {
    return;
  }
  console.log(evt.target.value);
  num2 += evt.target.value;
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
  display.textContent = "";
  return [displayText, num1, num2, operator, result];
}