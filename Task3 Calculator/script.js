var firstValue = "";
var secondValue = "";
var operator = "";
var typingSecond = false;

function addNumber(num) {

    if (typingSecond === false) {
        firstValue = firstValue + num;
        document.getElementById("display").value = firstValue;
    }
    else {
        secondValue = secondValue + num;
        document.getElementById("display").value =
            firstValue + " " + operator + " " + secondValue;
    }
}

function chooseOperator(op) {
    operator = op;
    typingSecond = true;

    document.getElementById("display").value =
        firstValue + " " + operator;
}

function getAnswer() {

    var num1 = Number(firstValue);
    var num2 = Number(secondValue);
    var result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            result = "Cannot divide by 0";
        } else {
            result = num1 / num2;
        }
    }

    document.getElementById("display").value = result;

    firstValue = result;
    secondValue = "";
    typingSecond = false;
}

function clearAll() {
    firstValue = "";
    secondValue = "";
    operator = "";
    typingSecond = false;
    document.getElementById("display").value = "";
}
