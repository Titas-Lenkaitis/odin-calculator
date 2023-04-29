let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector(".display");
let displayText = "";
let buttons = document.querySelector(".numbers");
let numButton = [];

for (i = 0; i < 10; i++) {
  numButton[i] = document.querySelector(".num" + i);
}
for (i = 0; i < numButton.length; i++) {
  numButton[i].value = i;
}

addListenersForNum1();


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
};


function addToNum1(evt) {
  if (typeof evt.target.value !== "string") {
    return;
  }
  console.log(evt.target.value);
  num1 += evt.target.value;
  return [addToDisplay(evt.target.value), num1];
}

function assignOperator(op) {

}

function addToNum2(num) {

}

function addToDisplay(thingToAdd) {
  displayText += thingToAdd;
  display.textContent = "" + displayText;
  return displayText;
}


function addListenersForNum1() {
  buttons.addEventListener("click", addToNum1, false)
}
